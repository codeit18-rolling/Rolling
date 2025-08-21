const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;

const getFetchCloudinary = (url, width = 1920) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/c_scale,w_${width},q_auto,f_auto/${url}`;
};

export default getFetchCloudinary;
