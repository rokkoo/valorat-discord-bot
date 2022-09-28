import { Message } from 'discord.js';

interface Command {
  command: string;
  action: (message: Message, args: string[]) => void;
}

const helloCommand: Command = {
  command: 'hello',
  action(message, args) {
    console.log('message from helloCommand', args);

    message.reply(`args -> ${args.toString()}`);
  },
};

const commands: Command[] = [helloCommand];

export const handleCommand = (message: Message) => {
  const MESSAGE_ID = message.author.id;

  // dont continue as is the bot `test-valorant-bot`
  if (MESSAGE_ID === '1016773153411833856') return;

  const [fullCommand, ...args] = message.content.split(' ');
  const [_, command] = fullCommand.split('!'); // get the command

  const commandAction = commands.find((action) => command === action.command);

  console.log(commandAction);

  commandAction?.action(message, args);
};
