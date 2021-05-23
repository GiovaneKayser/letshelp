"use strict";

// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Ong from '../../Models/Ong'
export default class OngsController {
  async index({ view }) {
    const ongs = await Ong.all()
    console.log(`ongs`, ongs)
    return view.render("ong/index", {ongs});
  }
  async register({ view }) {
    return view.render("ong/register");
  }
  async add({ request, response, session}) {
    const data = request.all();
    const ong = new Ong()
    ong.name = data.name
    ong.description = data.description
    await ong.save()

    session.flash("success", "ONG adicionada com sucesso");

    return response.redirect().toPath("/ong")
  }
}
