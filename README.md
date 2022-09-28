# Valorat-discord-bot

Valorat-discord-bot is a bot that by passing a `username#tag` will return some data about this user

## Installation

Use the package manager npm to install.

```bash
npm install
```

## Usage

```bash
npm start
```

Remember to add a valid token on the `.env` file `DISCORD_TOKEN`

### Register a commdan `!hello <args>`

```typescript
// create the command commands/index.ts
const helloCommand: Command = {
  command: 'hello',
  action(message, args) {
    console.log('message from helloCommand', args);

    message.reply(`args -> ${args.toString()}`);
  },
};

// Add the command to the list
const commands: Command[] = [helloCommand];
```

### Register a slash command `/hello`

```typescript
// create the command
export const Hello: Command = {
  name: "hello",
  description: "Returns a greeting",
  type: ApplicationCommandType.ChatInput,
  // here we construct our logic for this command
  run: async (client, interaction) => {
    const content = "Hello there!";

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

// Add the command to the list
export const Commands: Command[] = [Hello];

// Register commands
await client.application.commands.(Commands);
```

## Contributing

Please read `CONTRIBUTING.md`

## License

[MIT](https://choosealicense.com/licenses/mit/)
