const YANDEX_API_KEY = 'dict.1.1.20231110T132713Z.6452285b573c8808.e7486e46d8f88b228482009985ace433c7e11dcc';
const API_URL = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup';
const QUERIES = `?key=${YANDEX_API_KEY}&lang=ru-ru&ui=ru&text=`;
const getMeaning = async (word) => {
  console.log('Выполняю поиск по слову: '+ word);
  const f = await fetch(`${API_URL}${QUERIES}${word}`);
  const result = await f.json();
  // FIX later
  const response = result;
  return response.def[0];
};

export default getMeaning;
