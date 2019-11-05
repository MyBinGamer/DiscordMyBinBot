import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class serverinfo implements IBotCommand {
    
    private readonly _command = "serverinfo"
    
    help(): string 
    {
        return "This command shows the info about Current Server";
    }    

    isThisCommand(command: string): boolean 
    {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>
    {

        let embed = new Discord.RichEmbed()
                        .setColor([255,0,0])
                        .setTitle("MyBin Info")
                        .setFooter("P.S Something is hidden here owo")
                        .setImage(client.user.avatarURL)
                        .setDescription("This is default description. MyBinGamer was too lazy to add some description here")
                        .addField("Server Count:", `idk what but this server currently has ${msgObject.guild.memberCount} members.`)

        msgObject.channel.send(embed)
        .catch(console.error);
    }


}