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

Route.get('/', async ({ auth,view }) => {
  await auth.use("web").authenticate();

   let campaigns =
      [
        {
          title: "Teste 1",
          ong: "Ong teste",
          describe: "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia.",
          reward: 100,
          xp:10
      },
      {
          title: "Teste 2",
          ong: "Ong teste 2",
          describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
          reward: 300,
          xp: 30
        }
     ]
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
