import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class join implements IBotCommand {

    private readonly _command = "join"

    help(): string 
    {
        return "Join Bot to Voice Channel";
    }    

    isThisCommand(command: string): boolean 
    {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> 
    {
        // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
    if (!msgObject.guild) return;
    if (msgObject.member.voiceChannel) {
      msgObject.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          msgObject.reply('I have successfully connected to the channel!');
        })
        .catch(console.error);
    } else {
      msgObject.reply('You need to join a voice channel first!');
    }
  }
}