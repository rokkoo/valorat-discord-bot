import { Client } from "discord.js";

console.log("Bot is starting...");

const discordClient = new Client({
  intents: [],
});

console.log({ discordClient });

export default discordClient;
