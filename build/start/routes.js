"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
const Campaign_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Campaign"));
Route_1.default.get('/', async ({ auth, view }) => {
    await auth.use("web").authenticate();
    const campaigns = await Campaign_1.default.all();
    let user = {
        name: 'Giovane Kayser',
    };
    return view.render("welcome", { campaigns, user, auth });
});
Route_1.default.get('/login', 'UsersController.index');
Route_1.default.post('/login', 'UsersController.login');
Route_1.default.get('/register', 'UsersController.register');
Route_1.default.post('/user/add', 'UsersController.add');
Route_1.default.get('/ong', 'OngsController.index');
Route_1.default.get('/ong/register', 'OngsController.register');
Route_1.default.post("/ong/add", 'OngsController.add');
Route_1.default.get('/campaigns', 'CampaignsController.index');
Route_1.default.get('/campaigns/register/:id', 'CampaignsController.register');
Route_1.default.post('/campaigns/add', 'CampaignsController.add');
Route_1.default.get('/shop', 'ShopsController.index');
//# sourceMappingURL=routes.js.map