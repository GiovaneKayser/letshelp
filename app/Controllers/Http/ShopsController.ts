// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ShopsController {
  async index({ view }) {
    const itens = [
      {
        imageUrl: '/img/camisa.png',
        price: 100.00,
        name:'Camisa vermelha'
      },
      {
        imageUrl: '/img/calca.png',
        price: 120.00,
        name:'Calça azul'
      },
      {
        imageUrl: '/img/bota.png',
        price: 1000.00,
        name:'Bota'
      },
      {
        imageUrl: '/img/bola.png',
        price:5000.00,
        name:'Bola vermelha'
      },
      {
        imageUrl: '/img/comida.png',
        price: 10000.00,
        name:'Bolinho'
      }
    ];
    return view.render('shop/index',{itens})
  }
}
