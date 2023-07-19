const express = require('express');
const cartRouter = express.Router();
const Cart = require('../model/cart.model.js');

cartRouter.route('/cartpost').post(async (req, res) => {
    const uid = req.body.userId;
    const oid = req.body.orderId;
  
    try {
      const existingCart = await Cart.findOne({ userId: uid, orderId: oid });
  
      if (existingCart) {
        res.status(404).json({ success: false, message: "Data already in cart" });
      } else {
        const cart = new Cart(req.body);
        await cart.save();
        res.status(200).json({ success: true, message: "Order saved successfully" });
      }
    } catch (err) {
      res.status(500).json({ success: false, err: "Internal Server Error" });
    }
  });
  

cartRouter.route('/cartfind').get(async (req,res)=>{
    await Cart.find().then((cartOrder)=>{
        res.status(200).json({cartOrder});
    }).catch((err)=>{
        res.status(500).json({err:"Server Error"})
    })
})

module.exports = cartRouter;