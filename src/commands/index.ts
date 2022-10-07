import { Message } from 'discord.js';
import { getPlayerNameAndTag, getPlayerRank } from './lib/rank'
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

const RankCommand: Command = {
  command: 'rank',
  async action(message, args) {
  
    if (args.length === 0) {
     return message.reply(`Provide a username and tag! (Fulanin#EUW)`);
    }
   const { name, tag } = getPlayerNameAndTag(args);
 
   return message.reply(await getPlayerRank(name, tag));
  },
};


const commands: Command[] = [helloCommand, RankCommand];

export const handleCommand = (message: Message) => {
  const MESSAGE_ID = message.author.id;

  // dont continue as is the bot `test-valorant-bot`
  if (MESSAGE_ID === '1025682821941039155') return;

  const [fullCommand, ...args] = message.content.split(' ');
  const [_, command] = fullCommand.split('!'); // get the command

  const commandAction = commands.find((action) => command === action.command);

  console.log(commandAction);

  commandAction?.action(message, args);
};
