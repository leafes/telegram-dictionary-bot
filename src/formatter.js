import getMeaning from "./api.js";

const formatMeaning = async (meaningData) => {
  if (!meaningData) return 'К сожалению, я ничего не нашел 🧍'
  const listOfMeanings = meaningData.tr.map((meaning) => meaning.text)
  const message = `Поиск по слову: ${meaningData.text}\n----\nЧасть речи: ${meaningData.pos} \nЗначения: ${listOfMeanings.join(', ')}`;
  return message;
}

export default formatMeaning;
