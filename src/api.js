import {
  API_BASE,
  API_KEY,
  FAVOURITES_KEY,
  GET_PHOTOS_PARAMS
} from "./constants";
import { getUrlParamsString } from "./utils";

export const getPhotos = (page) => {
  const params = {
    ...GET_PHOTOS_PARAMS,
    api_key: API_KEY,
    page
  };

  return fetch(`${API_BASE}/?${getUrlParamsString(params)}`).then((res) =>
    res.json()
  );
};

export const getFavourites = () =>
  (localStorage.getItem(FAVOURITES_KEY) || "").split(",");

export const addFavourite = (id) =>
  localStorage.setItem(FAVOURITES_KEY, [...getFavourites(), id].join(","));

export const removeFavourite = (id) =>
  localStorage.setItem(
    FAVOURITES_KEY,
    [...getFavourites().filter((favId) => favId !== id)].join(",")
  );
