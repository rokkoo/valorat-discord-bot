import axios from "axios";
import { Settings } from "./constants";

export const getPlayerNameAndTag = (args: string[]) => {
  // Handling names with spaces
  const rawArgs = args.join(" ");
  const splittedArgs = rawArgs.split("#");
  // Encode in URL format
  const name = encodeURI(splittedArgs[0]);
  const tag = splittedArgs[1];
  return { name, tag };
};

export const getPlayerRank = async (name: string, tag: string) => {
  if (!name || !tag) {
    return "Provide a username and tag! (Fulanin#EUW)";
  }

  try {
    const response = await axios.get(
      `${Settings.BASE_URL}/mmr/eu/${name}/${tag}`
    );

    if (response.status === 200) {
      const {
        data: {
          data: { currenttierpatched, elo },
        },
      } = response;

      if (!currenttierpatched && !elo) {
        return `${decodeURI(
          name
        )}#${tag} doesn't have MMR stats at this moment.`;
      }

      return `${decodeURI(
        name
      )}#${tag}'s current tier is ${currenttierpatched}, ELO: ${elo}.`;
    } else {
      return `Oops something went wrong!`;
    }
  } catch (error) {
    console.log({ error });

    return `Oops something went wrong!`;
  }
};
