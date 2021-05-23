// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ShopsController {
  async index({ view }) {
    const itens = [
      {
        imageUrl: '/assets/img/camisa.png',
        price: 100.00,
        name:'Camisa vermelha'
      },
      {
        imageUrl: '/assets/img/calca.png',
        price: 120.00,
        name:'Calça azul'
      },
      {
        imageUrl: '/assets/img/bota.png',
        price: 1000.00,
        name:'Bota'
      },
      {
        imageUrl: '/assets/img/bola.png',
        price:5000.00,
        name:'Bola vermelha'
      },
      {
        imageUrl: '/assets/img/comida.png',
        price: 10000.00,
        name:'Bolinho'
      }
    ];
    return view.render('shop/index',{itens})
  }
}
