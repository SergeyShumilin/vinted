import { API_BASE_PHOTO, SCROLL_OFFSET } from "./constants";

export const getUrlParamsString = (params) =>
  Object.entries(params)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

export const getPhotoUrl = ({ server, id, secret }) =>
  `${API_BASE_PHOTO}/${server}/${id}_${secret}_n.jpg`;

export const isScrolledBottom = () => {
  return (
    window.innerHeight + window.scrollY + SCROLL_OFFSET >=
    document.body.offsetHeight
  );
};
