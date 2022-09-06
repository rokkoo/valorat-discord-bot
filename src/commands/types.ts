import {
  ChatInputApplicationCommandData,
  Client,
  CommandInteraction,
} from "discord.js";

/**
 * Command  structure
 */
export interface Command extends ChatInputApplicationCommandData {
  // The run property is a function that will be called when the command is executed
  run: (client: Client, interaction: CommandInteraction) => void;
}
