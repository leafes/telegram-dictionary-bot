import getMeaning from "./api.js";

const formattedMeaning = async (word) => {
  const meaning = await getMeaning(word);

  const message = `Поиск по слову: ${meaning.text}`;
  return JSON.stringify(message);
}

console.log(await formattedMeaning('Дверь'));
