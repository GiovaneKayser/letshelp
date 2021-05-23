"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async index({ view }) {
        return view.render('user/login');
    }
    async register({ view }) {
        return view.render('user/register');
    }
    async add({ request, session, response }) {
        const user = new User_1.default();
        user.name = request.input('name');
        user.email = request.input('email');
        user.password = request.input("password");
        user.birthday = request.input('birthday');
        await user.save();
        session.flash("success", "Cadastrado com sucesso");
        return response.redirect().toPath('/login');
    }
    async login({ request, auth, response }) {
        const email = request.input("email");
        const password = request.input("password");
        try {
            await auth.use("web").attempt(email, password);
            response.redirect("/");
        }
        catch {
            return response.badRequest("Invalid credentials");
        }
        return response.redirect().toPath("/", { auth });
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map