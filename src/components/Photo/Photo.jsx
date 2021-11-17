import { getPhotoUrl } from "../../utils";
import "./Photo.css";

export default (props) => {
  const {
    title,
    ownername,
    id,
    isFavourite,
    onSetFavourite,
    onRemoveFavourite
  } = props;
  const setFavourite = () => onSetFavourite(id);
  const removeFavourite = () => onRemoveFavourite(id);

  return (
    <div
      className="photo"
      data-testid="photo"
      style={{ backgroundImage: `url(${getPhotoUrl(props)})` }}
    >
      <div className="photo-hint">
        <div className="photo-caption centered">
          <div>
            <div className="photo-caption-text">{title}</div>
            <div className="photo-caption-delimiter" />
            <div className="photo-caption-text">{ownername}</div>
            {isFavourite ? (
              <button className="favourite-btn" onClick={removeFavourite}>
                Unfavourite
              </button>
            ) : (
              <button className="favourite-btn" onClick={setFavourite}>
                Favourite
              </button>
            )}
          </div>
        </div>
        <div className="photo-overlay centered" />
      </div>
    </div>
  );
};
