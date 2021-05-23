// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Campaign from "App/Models/Campaign"
import Ong from "App/Models/Ong";

export default class CampaignsController {
  async index({ view }) {
    const campaigns =await Campaign.all()
    return view.render("campaign/index", { campaigns });
  }
  async register({ view, params }) {
    const ong = Ong.find(params.id)
    return view.render('campaign/register', {ong})
  }
  async add({ request, response }) {
    const ong = await Ong.find(request.input("ong_id"));
    const campaign = await Campaign.create({
      name: request.input('name'),
      description: request.input('description'),
      objective: request.input('objective'),
      reward: request.input('objective') * 2,
      xp: request.input('objective') * 3,

    })
    await ong?.related("campaigns").create(campaign)

    return response.redirect('/campaigns')
  }
}
