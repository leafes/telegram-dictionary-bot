import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import getMeaning from "./api.js";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('<b>Привет, я бот-словарь, отправь мне слово и я найду его значение в толковом словаре</b>'));

bot.on(message('text'), async (ctx) => {
  const meaning = await getMeaning(ctx.message.text);
  console.log(meaning)
  ctx.reply(meaning);
  });

bot.launch(); 
console.log('BOT STARTED');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));