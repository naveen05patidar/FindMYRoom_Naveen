const express = require('express');
const orderRouter = express.Router();
const Order = require('../model/order.model.js');

orderRouter.route('/orderpost').post(async(req,res)=>{
    let order = new Order(req.body);
    console.log(req.body);
    order.save().then((order)=>{
        res.status(200).json({success:true, message:"order Saved successfully"});
    }).catch((err)=>{
        res.status(500).json({success:false,err:"Internal Server Error"})
    })
})

orderRouter.route('/orderfind').get(async (req,res)=>{
    await Order.find().then((order)=>{
        res.status(200).json({order});
    }).catch((err)=>{
        res.status(500).json({err:"Server Error"})
    })
})

module.exports = orderRouter;