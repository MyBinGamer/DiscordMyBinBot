import * as Discord from "discord.js";

export interface IBotCommand {
    //Add a '_command' type string which is a type of any so we call back the 'private readonly _command = ""'
    [_command: string]: any;
    help(): string;
    isThisCommand(command: string): boolean;
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>;
}