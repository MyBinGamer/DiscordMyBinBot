import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class fun_mirror implements IBotCommand {
    
    private readonly _command = "fun_mirror"
    
    help(): string 
    {
        return "Do you wonna see yourself in Fun Mirror?";
    }    

    isThisCommand(command: string): boolean 
    {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> 
    {

        msgObject.reply(msgObject.author.avatarURL);
    }


}