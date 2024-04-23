import Stripe from "stripe";
import {STRIPE_PRIVATE_KEY} from '../server/config.js'
const stripe = new Stripe(STRIPE_PRIVATE_KEY);

export const crearSesion = async (req, res) => {
  const sesion = await stripe.checkout.sessions.create({
    line_items: [
      {
        //objeto de la lista de productos
        price_data: {
          product_data: {
            name: "Camisa PRX",
            description: "Camisa de la comunidad de PRX",
            images: [
              "https://ae01.alicdn.com/kf/S0c8fdba410e042128694da3afe677d66b/Camiseta-oficial-de-PRX-Champions-2023-camisa-de-Edici-n-especial-F0rsakeN-Jinggg-parte-superior-de.jpg",
            ],
          },
          currency: "usd",
          unit_amount: 6000, // 60.00
        },
        quantity: 1,
      },
      {
        //objeto de la lista de productos
        price_data: {
          product_data: {
            name: "pantalon PRX",
            description: "pantalon de la comunidad de PRX",
            images: [
              "https://shop.pprx.team/cdn/shop/files/product-pic-pants-1.jpg?v=1708097502&width=400",
            ],
          },
          currency: "usd",
          unit_amount: 5000, // 50.00
        },
        quantity: 2,
      },
    ],
    mode: "payment", //pago de una sola vez
    success_url: "http://localhost:3000/exitoso",
    cancel_url: "http://localhost:3000/cancelado",
  });
  return res.json(sesion);
};