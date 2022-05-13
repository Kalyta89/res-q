export const rescaleImage = (width, height, desiredHeight) => {
  return Math.round((width * desiredHeight) / height);
};
