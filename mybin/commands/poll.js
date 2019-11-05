"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class poll {
    constructor() {
        this._command = "poll";
    }
    help() {
        return "Creates a basic poll";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            msgObject.delete(0);
            if (args.length < 1) {
                return;
            }
            let pollEmbed = new Discord.RichEmbed()
                .setTitle("Poll")
                .setDescription(args.join(" "));
            let pollMessage = yield msgObject.channel.send(pollEmbed);
            yield pollMessage.react("✅");
            yield pollMessage.react("❎");
            const filter = (reaction) => reaction.emoji.name === "✅" || reaction.emoji.name === "❎";
            const results = yield pollMessage.awaitReactions(filter, { time: 10000 });
            let resultsEmbed = new Discord.RichEmbed()
                .setTitle("Poll Results")
                .setDescription(`Results For The Poll: ${args.join(" ")}`)
                .addField("✅: ", `${results.get("✅").count - 1} Votes`)
                .addField("❎: ", `${results.get("❎").count - 1} Votes`);
            msgObject.channel.send(resultsEmbed);
            pollMessage.delete(0);
        });
    }
}
exports.default = poll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9sbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9wb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXNDO0FBR3RDLE1BQXFCLElBQUk7SUFBekI7UUFFcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQTtJQTBDdEMsQ0FBQztJQXhDRyxJQUFJO1FBRUEsT0FBTyxzQkFBc0IsQ0FBQztJQUNsQyxDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFFekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNyQyxDQUFDO0lBRUssVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCOztZQUUvRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7Z0JBQUUsT0FBTzthQUFFO1lBRTlCLElBQUksU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDakMsUUFBUSxDQUFDLE1BQU0sQ0FBQztpQkFDaEIsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtZQUVwQyxJQUFJLFdBQVcsR0FBRyxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBRTFELE1BQU8sV0FBK0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEQsTUFBTyxXQUErQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUdsRCxNQUFNLE1BQU0sR0FBRyxDQUFDLFFBQWlDLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLENBQUM7WUFDakgsTUFBTSxPQUFPLEdBQUcsTUFBTyxXQUErQixDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUU5RixJQUFJLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ3JDLFFBQVEsQ0FBQyxjQUFjLENBQUM7aUJBQ3hCLGNBQWMsQ0FBQyx5QkFBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2lCQUN6RCxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUMsQ0FBQyxRQUFRLENBQUM7aUJBQ3BELFFBQVEsQ0FBQyxLQUFLLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBRXpELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3BDLFdBQStCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9DLENBQUM7S0FBQTtDQUdKO0FBNUNELHVCQTRDQyJ9