const express = require('express');
const bcrypt = require('bcrypt');
const Router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../model/user.model.js');
const jwtSecret = 'naveenpatia232#&@*#patidarjiboll';

Router.route('/post').post(async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    const obj = {
        name: req.body.name,
        email: req.body.email,
        password: secPassword,
        mobile: req.body.mobile
    }

    let user = await new User(obj);

    await user.save().then((user) => {
        res.status(200).json({ success: true, user: "data SSaved" });
    }).catch(err => {
        res.status(500).json({ err: "Server Error" });
    })
});

Router.route('/login').post(async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const pwdData = await User.findOne({ email });

        if (!pwdData) {
            res.status(400).send('please inter valid Email')
        }

        const CompareData = await bcrypt.compare(password, pwdData.password);

        if (!CompareData) {
            res.status(400).send('please inter valid Password')
        }
        const data = {
            id: pwdData.email
        }
        const token = await jwt.sign(data, jwtSecret);

        res.status(200).json({ success: true, token: token })

    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
})


Router.route('/userfind/:userid').get(async (req, res) => {
    const uid = req.params.userid;

    await User.findOne({ email: uid }).then((user) => {
        res.status(200).json({ user: user });
    }).catch(err => {
        res.status(500).json({ err: "Internal Server Error Please try after some time" })
    })
})

Router.route('/userUpdate/:email').put(async (req, res) => {
    const email = req.params.email;
    const updateData = req.body;
    try {
        const updatedUser = await User.findOneAndUpdate({email:email}, updateData);
        if (!updatedUser) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, user: updatedUser });
      } catch (error) {
        res.status(500).json({ success: false, error: error.message });
      }
})

module.exports = Router;


