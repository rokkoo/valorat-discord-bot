import { Client, GatewayIntentBits, Partials } from 'discord.js';

console.log('Bot is starting... 🚀');

const discordClient = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [
    Partials.Channel, // Required to receive DMs
  ],
});

export default discordClient;
