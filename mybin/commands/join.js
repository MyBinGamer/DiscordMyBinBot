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
class join {
    constructor() {
        this._command = "join";
    }
    help() {
        return "Join Bot to Voice Channel";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!msgObject.guild)
                return;
            if (msgObject.member.voiceChannel) {
                msgObject.member.voiceChannel.join()
                    .then(connection => {
                    msgObject.reply('I have successfully connected to the channel!');
                })
                    .catch(console.error);
            }
            else {
                msgObject.reply('You need to join a voice channel first!');
            }
        });
    }
}
exports.default = join;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiam9pbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9qb2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBMkJ0QyxDQUFDO0lBekJHLElBQUk7UUFFQSxPQUFPLDJCQUEyQixDQUFDO0lBQ3ZDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUV6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBSW5GLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBQzdCLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQ2pDLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRTtxQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29CQUNqQixTQUFTLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7Z0JBQ25FLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLFNBQVMsQ0FBQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQzthQUM1RDtRQUNILENBQUM7S0FBQTtDQUNGO0FBN0JELHVCQTZCQyJ9