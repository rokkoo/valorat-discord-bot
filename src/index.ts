require('dotenv').config();

import discordClient from './discordClient';

import { createCommand, createInteraction, ready } from './listeners';

ready(discordClient);
createInteraction(discordClient);
createCommand(discordClient);

// Loging to discord
discordClient.login(process.env.DISCORD_TOKEN);
