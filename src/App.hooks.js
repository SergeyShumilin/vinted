import { useState, useCallback, useEffect } from "react";
import { addFavourite, getFavourites, getPhotos, removeFavourite } from "./api";
import { isScrolledBottom } from "./utils";

export const useApp = () => {
  const [photos, setPhotos] = useState({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadPhotos = useCallback(() => {
    setLoading(true);
    getPhotos(page).then((res) => {
      setPhotos((photos) =>
        res.photos.photo.reduce((acc, cur) => {
          if (!photos[cur.id]) {
            return { ...acc, [cur.id]: cur };
          }

          return acc;
        }, photos)
      );
      setLoading(false);
    });
  }, [page]);
  const handleScroll = useCallback(() => {
    if (isScrolledBottom() && !loading) {
      setPage(page + 1);
    }
  }, [loading, page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(loadPhotos, [page]);

  return { photos };
};

export const useFavourites = () => {
  const [favourites, setFavourites] = useState(getFavourites());

  const handleSetFavourite = (id) => {
    setFavourites([...favourites, id]);
    addFavourite(id);
  };
  const handleRemoveFavourite = (id) => {
    setFavourites(favourites.filter((favId) => favId !== id));
    removeFavourite(id);
  };

  return { favourites, handleSetFavourite, handleRemoveFavourite };
};
