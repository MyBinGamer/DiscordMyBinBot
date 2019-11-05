import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class kick implements IBotCommand {
    
    private readonly _command = "kick"
    
    help(): string 
    {
        return "(Admin Only) Kicks the mentioned user";
    }    

    isThisCommand(command: string): boolean 
    {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> 
    {
        //Get the member to kick and the reason for the kick
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let kickLog = `${msgObject.author.username}: ${suppliedReason}`;
        
        //Clean-up our message
        msgObject.delete(0)
          .catch(console.error);

        //Make sure that the person using the command is an Admin
        if(!msgObject.member.hasPermission("ADMINISTRATOR")){
            msgObject.channel.send(`Nice try ${msgObject.author.username}, but you don't have permission to kick people!`)
            .then(msg => {
                (msg as Discord.Message).delete(5000)
                  .catch(console.error);
            });
            return;
        }

        //Make sure that they have actually mentioned someone to be kicked
        if(!mentionedUser) 
        {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, I couldn't find that user to kick them`)
            .then(msg => {
                (msg as Discord.Message).delete(5000)
                  .catch(console.error);
            });
            return;
        }

        //Kick the member with the supplied reason
        msgObject.guild.member(mentionedUser).kick(kickLog)
        .then(console.log)
        .catch(console.error)
    }
}