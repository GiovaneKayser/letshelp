"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ong_1 = __importDefault(require("../../Models/Ong"));
class OngsController {
    async index({ view }) {
        const ongs = await Ong_1.default.all();
        return view.render("ong/index", { ongs });
    }
    async register({ view }) {
        return view.render("ong/register");
    }
    async add({ request, response, session }) {
        const data = request.all();
        const ong = new Ong_1.default();
        ong.name = data.name;
        ong.description = data.description;
        await ong.save();
        session.flash("success", "ONG adicionada com sucesso");
        return response.redirect().toPath("/ong");
    }
}
exports.default = OngsController;
//# sourceMappingURL=OngsController.js.map