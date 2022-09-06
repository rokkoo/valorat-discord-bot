import { Client, CommandInteraction, Interaction } from "discord.js";
import { Commands } from "../commands";

export const ready = (client: Client) => {
  client.on("ready", async () => {
    if (!client.user || !client.application) {
      return;
    }

    // Register commands
    await client.application.commands.set(Commands);

    console.log(`${client.user.username} is online`);
  });
};

export const createInteraction = (client: Client) => {
  client.on("interactionCreate", async (interaction: Interaction) => {
    if (interaction.isCommand() || interaction.isContextMenuCommand()) {
      await handleSlashCommand(client, interaction);
    }
  });
};

/**
 * This is where we will handle slash commands
 */
export const handleSlashCommand = async (
  client: Client,
  interaction: CommandInteraction
) => {
  const validSlashCommandName = Commands.find(
    (command) => command.name === interaction.commandName
  );

  if (!validSlashCommandName) {
    return interaction.followUp({
      content: "This is not a valid command",
    });
  }

  await interaction.deferReply();

  validSlashCommandName.run(client, interaction);
};
