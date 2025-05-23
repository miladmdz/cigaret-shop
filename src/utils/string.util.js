export const toPascalCase = ({ str }) =>
  str
    .toLowerCase()
    .replace(/\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1));

export const toKebabCase = ({ str }) =>
  str.trim().toLowerCase().replace(/\s+/g, "-");
