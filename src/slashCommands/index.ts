import { ApplicationCommandType } from "discord.js";
import { Command } from "./types";

export const Hello: Command = {
  name: "hello",
  description: "Returns a greeting",
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    const content = "Hello there!";

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

/**
 * It is an array of Command objects,
 * that we can now use to cycle through all the existing commands to know which one was executed.
 */
export const Commands: Command[] = [Hello];
