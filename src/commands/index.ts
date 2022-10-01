import { Message } from 'discord.js';
import axios from 'axios';
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
    // Handling names with spaces
    const rawArgs = args.join(' ');
    const splittedArgs = rawArgs.split('#');
    // Encode in URL format
    const name = encodeURI(splittedArgs[0]);
    const tag = splittedArgs[1];

    if (!name || !tag) {
      return message.reply(`Provide a username and tag! (Fulanin#EUW)`);
     }

    const response = await axios.get(`https://api.henrikdev.xyz/valorant/v1/mmr/eu/${name}/${tag}`);
    if (response.status === 200) {
      const { data: { data: {currenttierpatched, elo } } } = response;
      
      if (!currenttierpatched && !elo) {
        return message.reply(`${decodeURI(name)}#${tag} doesn't have MMR stats at this moment.`);
      }
      message.reply(`${decodeURI(name)}#${tag}'s current tier is ${currenttierpatched}, ELO: ${elo}.`);
    } else {
      message.reply(`Oops something went wrong!`);
    }
 
  },
};


const commands: Command[] = [helloCommand, RankCommand];

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
