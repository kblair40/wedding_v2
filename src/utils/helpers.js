export const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .trim()
    .split(" ")
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

export const sortByLastName = (data) => {
  data.sort((a, b) => {
    if (a.full_name && b.full_name) {
      let a_last = a.full_name.split(" ")[1];
      let b_last = b.full_name.split(" ")[1];

      let returnVal = a_last > b_last ? 1 : a_last < b_last ? -1 : 0;

      return returnVal;
    }
    return 0;
  });

  return data;
};
