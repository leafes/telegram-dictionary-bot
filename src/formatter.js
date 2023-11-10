import getMeaning from "./api.js";

const formattedMeaning = async (word) => {
  const result = await getMeaning(word);
  return JSON.stringify(result);
}

console.log(await formattedMeaning('Дверь'));