export const toNormalizedColorStyles = ({ stylePart, color }) => {
  return color ? color.replace(/^(text|bg|border)-/, `${stylePart}-`) : "";
};
