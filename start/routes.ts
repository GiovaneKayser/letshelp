/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Campaign from 'App/Models/Campaign';

Route.get('/', async ({ auth,view }) => {
  await auth.use("web").authenticate();

  const campaigns = await Campaign.all()

  let user = {
    name: 'Giovane Kayser',
  }
  return view.render("welcome", { campaigns, user, auth });
})

Route.get('/login', 'UsersController.index');
Route.post('/login', 'UsersController.login');

Route.get('/register', 'UsersController.register');
Route.post('/user/add', 'UsersController.add');

Route.get('/ong', 'OngsController.index');

Route.get('/ong/register', 'OngsController.register');
Route.post("/ong/add", 'OngsController.add');

Route.get('/campaigns', 'CampaignsController.index');
Route.get('/campaigns/register/:id', 'CampaignsController.register');
Route.post('/campaigns/add', 'CampaignsController.add');

Route.get('/shop', 'ShopsController.index');
