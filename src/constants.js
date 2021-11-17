export const API_BASE = "https://api.flickr.com/services/rest";
export const API_BASE_PHOTO = "https://live.staticflickr.com";

export const API_KEY = "919d41fa5447f5b699fbd19035261547";

export const SCROLL_OFFSET = 300;

export const GET_PHOTOS_PARAMS = {
  method: "flickr.photos.getRecent",
  format: "json",
  per_page: 21,
  nojsoncallback: 1,
  extras: "owner_name"
};

export const FAVOURITES_KEY = "favourites";
