import * as Discord from "discord.js";
import { IBotCommand } from "../api";

//Lets import the `cmds` variable from our index
import { cmds } from "../index";

export default class help implements IBotCommand {
    
    private readonly _command = "help"
    
    help(): string 
    {
        return "Brings up the help embed";
    }    

    isThisCommand(command: string): boolean 
    {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>
        {

            
            const help = new Discord.RichEmbed()
            .setColor("WHITE")
            .setTitle(`${client.user.username}'s help menu`)
            .setFooter(client.user.tag, client.user!.displayAvatarURL)
            .setTimestamp();

            //We're going to creat a for() loop so we loop over every command
            for (let i = 0; i < cmds.commands.length; i++) 
            {
                help.addField("Command: " + cmds.commands[i]._command.split("")[0].toUpperCase() + cmds.commands[i]._command.slice(1), "\nHelp: " + cmds.commands[i].help())
            }


            await msgObject.channel.send(help);
    }


}