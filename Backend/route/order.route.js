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

orderRouter.route('/orderfindone/:oid').get(async (req, res) => {
  const oid = req.params.oid;

  await Order.findOne({ orderId: oid }).then((order) => {
    console.log(order);
      res.status(200).json({ order: order });
  }).catch(err => {
      res.status(500).json({ err: "Internal Server Error Please try after some time" })
  })
})

orderRouter.route('/updateOrder/:orderId').put(async (req,res)=>{
    const orderId = req.params.orderId;
    const updateData = req.body;
    try {
        const updatedOrder = await User.findOneAndUpdate({orderId:orderId}, updateData);
        if (!updatedOrder) {
          return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, user: updatedOrder });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
})



orderRouter.route('/bookedOrder/:orderId').put(async (req,res)=>{
    const orderId = req.params.orderId;
    const updateData = {
        status:"deactive"
    }

    try {
        const updatedOrder = await User.findOneAndUpdate({orderId:orderId}, updateData);
        if (!updatedOrder) {
          return res.status(404).json({ success: false, message: 'Order not found' });
        }
        res.status(200).json({ success: true, user: updatedOrder });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
})

module.exports = orderRouter;