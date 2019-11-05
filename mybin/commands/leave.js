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
class leave {
    constructor() {
        this._command = "leave";
    }
    help() {
        return "Leave from the Voice Channel";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            if (msgObject.guild.voiceConnection) {
                msgObject.guild.voiceConnection.disconnect();
            }
            else {
                msgObject.reply("I must be in a voice channel to be banished!");
            }
        });
    }
}
exports.default = leave;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvbGVhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixLQUFLO0lBQTFCO1FBRXFCLGFBQVEsR0FBRyxPQUFPLENBQUE7SUFxQnZDLENBQUM7SUFuQkcsSUFBSTtRQUVBLE9BQU8sOEJBQThCLENBQUM7SUFDMUMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBRXpCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFaEYsSUFBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtnQkFDaEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDaEQ7aUJBQ0k7Z0JBQ0QsU0FBUyxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFBO2FBQ2xFO1FBQ04sQ0FBQztLQUFBO0NBQ0Y7QUF2QkQsd0JBdUJDIn0=