import User from 'App/Models/User'

export default class UsersController {
  // async getRegister({ request, response }) {
  //   // let user = await user.post().create(request.all())

  // }
  async index({ view }) {
        return view.render('user/login')
  }q
  async register({ view }) {
    return view.render('user/register')
  }
  async add({ request, session, response }) {

    const user = new User()
    user.name = request.input('name')
    user.email = request.input('email')
    user.password = request.input("password");
    user.birthday = request.input('birthday')
    await user.save()
    session.flash("success", "Cadastrado com sucesso")
    return response.redirect().toPath('/login')


  }
  async login({ request, auth,response }) {
    const email = request.input("email");
    const password = request.input("password");
    try {
      await auth.use("web").attempt(email, password);

      response.redirect("/");
    } catch {
      return response.badRequest("Invalid credentials");
    }
    return response.redirect().toPath("/", { auth });

  }
}
