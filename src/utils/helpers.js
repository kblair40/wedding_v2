import uniqueRandom from "unique-random";

export const getRandomNum = () => {
  return uniqueRandom(1000, 9999);
};

export const toTitleCase = (str, removeWhitespace = true) => {
  console.log("TO TITLE CASE STRING:", str);
  return str
    .toLowerCase()
    .trim()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

export const getMaxWidths = (arr) => {
  const base = ["420px", "480px", "600px", "800px"];
  const baseObj = {
    base: "420px",
    sm: "480px",
    md: "600px",
    lg: "800px",
  };

  if (arr) {
    base = base.map((val) => {
      if (!val) return;
    });
  }

  return {
    base: base[0],
    sm: base[1],
    md: base[2],
    lg: base[3],
  };
};
