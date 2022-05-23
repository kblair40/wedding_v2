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

export const sortByLastName = (data) => {
  console.log("DATA:", data);
  data.sort((a, b) => {
    let a_last = a.full_name.split(" ")[1];
    let b_last = b.full_name.split(" ")[1];
    console.log("A LAST:", a_last);
    console.log("B LAST:", b_last);

    let returnVal = a_last > b_last ? 1 : a_last < b_last ? -1 : 0;
    console.log("RETURNING", returnVal, "\n\n");

    return returnVal;
    // return a > b ? 1 : a < b ? -1 : 0
  });

  return data;
};

export const getGuestByKey = (dataArr, key) => {
  let mainGuest = dataArr.find((gst) => Object.keys(gst)[0] === key);

  return mainGuest;
};
