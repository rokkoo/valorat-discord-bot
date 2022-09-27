import { Client, IntentsBitField, Partials } from 'discord.js';
import { ready } from './listeners';

console.log('Bot is starting...');

const discordClient = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildMessageTyping,
    IntentsBitField.Flags.DirectMessages,
    IntentsBitField.Flags.DirectMessageReactions,
    IntentsBitField.Flags.DirectMessageTyping,
  ],
  partials: [
    Partials.Channel, // Required to receive DMs
  ],
});

export default discordClient;
