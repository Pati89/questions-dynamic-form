export const idFormatter = (id) => {
  const str1 = id.split("_")[0];
  const str2 = id
    .split("_")
    .slice(1)
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join("");
  const str = `${str1}${str2}`;

  if (id.includes("_")) {
    return str;
  }
  return id;
};
