import uniqueRandom from "unique-random";

export const getRandomNum = () => {
  return uniqueRandom(1000, 9999);
};

export const toTitleCase = (str, removeWhitespace = true) => {
  return str
    .toLowerCase()
    .trim()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};
