import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class leave implements IBotCommand {

    private readonly _command = "leave"

    help(): string 
    {
        return "Leave from the Voice Channel";
    }    

    isThisCommand(command: string): boolean 
    {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> 
    {
       if(msgObject.guild.voiceConnection) {
           msgObject.guild.voiceConnection.disconnect();
       }
       else {
           msgObject.reply("I must be in a voice channel to be banished!")
       }
  }
}