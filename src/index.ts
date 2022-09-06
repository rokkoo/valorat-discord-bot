require("dotenv").config();

import discordClient from "./discordClient";

import { createInteraction, ready } from "./listeners";

ready(discordClient);
createInteraction(discordClient);

// Loging to discord
discordClient.login(process.env.DISCORD_TOKEN);
