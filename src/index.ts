import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

//Export the `commands` variable
export let cmds = {
    commands: commands
}

loadCommands(`${__dirname}/commands`)

client.on("ready", ()=> {

    //Set the bot's activity
    client.user.setActivity("Coding", {type: "PLAYING"});

    //Display that we are online
    console.log("MyBinBot is Ready for Adventures!");
})

client.on("guildMemberAdd", member => {

    let WelcomeChannel = member.guild.channels.find(channel => channel.name === "welcome") as Discord.TextChannel;
    WelcomeChannel.send(`Welcome ${member.displayName}! We hope you enjoy your time here!`);

    let memberRole = member.guild.roles.find(role => role.id ==="641280095952175107");
    member.addRole(memberRole);

    //member.send("Thank you for joining our server!");
})


client.on("guildMemberRemove", member => {

    let WelcomeChannel = member.guild.channels.find(channel => channel.name === "welcome") as Discord.TextChannel;
    WelcomeChannel.send("We are sorry that you had to go :(");
})

client.on("message", msg => {

    //Ignore the message if it was sent by the bot
    if(msg.author.bot) { return; }

    //Ignore the messages if it was sentin dms
    if(msg.channel.type == "dm"){ return; }

    //Ignore messages that don't start will the prefixes
    if(!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

  //Handle the command
  handleCommand(msg);
})

async function handleCommand(msg: Discord.Message) {

    //Split the string onto the command and all of the args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLowerCase();
    let args =  msg.content.split(" ").slice(1);

    //Loop through all of our loaded commands
    for (const commandClass of commands) {

        //Attempt to execute code but ready in case of a possible error
        try{

            //Check if our command class is the correct one
            if(!commandClass.isThisCommand(command)){

                //Go to the next iteration of the loop if this isn't the correct command class
                continue;
            }

            //Pause execution whilst we run the command's code
            await commandClass.runCommand(args, msg, client);
        }
        catch(exception) {

            //If there is an error, then log the exception
            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string) {

    //Exit if there are no commands
    if(!ConfigFile.config.commands || (ConfigFile.config.commands as string[]).length === 0) { return; }

    //Loop through all of the commands in our config file
    for(const commandName of ConfigFile.config.commands as string[])
    {

        //Load the command class
        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        //Cast our custom IBotCommand interface
        const command = new commandsClass() as IBotCommand;

        //Add to our commands list for later when commands are used
        commands.push(command);
    }
}

//Attempt to connect to the Discord servers with our token
client.login(ConfigFile.config.token);