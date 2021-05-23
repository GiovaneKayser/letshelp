"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Campaign_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Campaign"));
const Ong_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Ong"));
class CampaignsController {
    async index({ view }) {
        const campaigns = await Campaign_1.default.all();
        return view.render("campaign/index", { campaigns });
    }
    async register({ view, params }) {
        const ong = Ong_1.default.find(params.id);
        return view.render('campaign/register', { ong });
    }
    async add({ request, response }) {
        const ong = await Ong_1.default.find(request.input("ong_id"));
        const campaign = await Campaign_1.default.create({
            name: request.input('name'),
            description: request.input('description'),
            objective: request.input('objective'),
            reward: request.input('objective') * 2,
            xp: request.input('objective') * 3,
        });
        await ong?.related("campaigns").create(campaign);
        return response.redirect('/campaigns');
    }
}
exports.default = CampaignsController;
//# sourceMappingURL=CampaignsController.js.map