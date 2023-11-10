import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import getMeaning from "./api.js";
import formatMeaning from "./formatter.js";
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('<b>Привет, я бот-словарь, отправь мне слово и я найду его значение в толковом словаре</b>'));

bot.on(message('text'), async (ctx) => {
  ctx.reply(`Ищу в словаре слово ${ctx.message.text}`)
  const wordMeanings = await getMeaning(ctx.message.text);
  const formattedMeaning = await formatMeaning(wordMeanings);
  
  console.log(formattedMeaning);
  ctx.reply(formattedMeaning);
  });

bot.launch(); 
console.log('BOT STARTED');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));