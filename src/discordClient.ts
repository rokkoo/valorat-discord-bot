import { Client } from "discord.js";
import { ready } from "./listeners";

console.log("Bot is starting...");

const discordClient = new Client({
  intents: [],
});

export default discordClient;
