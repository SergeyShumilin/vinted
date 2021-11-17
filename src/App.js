import { Photo } from "./components";
import "./styles.css";
import { useApp, useFavourites } from "./App.hooks";

export default function App() {
  const { photos } = useApp();
  const {
    favourites,
    handleSetFavourite,
    handleRemoveFavourite
  } = useFavourites();

  return (
    <div className="App" data-testid="app">
      {Object.values(photos).map((photo) => (
        <Photo
          key={photo.id}
          {...photo}
          isFavourite={favourites.includes(photo.id)}
          onSetFavourite={handleSetFavourite}
          onRemoveFavourite={handleRemoveFavourite}
        />
      ))}
    </div>
  );
}
