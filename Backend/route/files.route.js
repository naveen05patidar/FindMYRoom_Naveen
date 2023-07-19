// // // const express = require('express');
// // // const path = require('path');
// // // const filesRouter = express.Router();
// // // const { v4: uuidv4 } = require('uuid');
// // // const multer = require('multer');
// // // const { model } = require('mongoose');

// // // const storage = multer.diskStorage({
// // //     destination:(req,res,cb)=>{
// // //         cb(null,'uploads/');
// // //     },
// // //     filename:(req,res,cb)=>{
// // //         const now = new Date();
// // //         const uniqueName = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}-.jpg`
// // //         cb(null,uniqueName)
// // //     }
// // // })

// // // const upload = multer({storage:storage});

// // // filesRouter.post('/upload',upload.array('files'),async (req,res)=>{
// // //     try {
// // //         const fileData = req.files.map((file)=>{
// // //             const filePath = path.join('uploads',file.filename);
// // //             return filePath;
// // //         })
// // //         const files = await File.insertMany(fileData);

// // //         res.status(200).json({success:true, message: 'Files uploaded successfully', files})
// // //         console.log(files);
// // //     } catch (error) {
// // //         res.status(500).json({ error: 'Server error' });
// // //     }
// // // })

// // const express = require('express');
// // const path = require('path');
// // const filesRouter = express.Router();
// // const { v4: uuidv4 } = require('uuid');
// // const multer = require('multer');
// // // const { File } = require('../models'); // Import the File model or adjust the import path based on your file structure
// // const File = require('../model/files.model.js')

// // const storage = multer.diskStorage({
// //     destination: (req, res, cb) => {
// //         cb(null, 'uploads/');
// //     },
// //     filename: (req, res, cb) => {
// //         const now = new Date();
// //         const uniqueName = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}-.jpg`;
// //         cb(null, uniqueName);
// //     }
// // });

// // const upload = multer({ storage: storage });

// // filesRouter.post('/upload', upload.array('files'), async (req, res) => {
// //     try {
// //         const fileData = req.files.map((file) => {
// //             const filePath = path.join('uploads', file.filename);
// //             return filePath;
// //         });
// //         const files = await File.insertMany(fileData);

// //         res.status(200).json({ success: true, message: 'Files uploaded successfully', files });
// //         console.log(files);
// //     } catch (error) {
// //         res.status(500).json({ error: 'Server error' });
// //     }
// // });

// // module.exports = filesRouter;



// const express = require('express');
// const path = require('path');
// const filesRouter = express.Router();
// const multer = require('multer');

// // Set up storage for multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         const uniqueName = `${Date.now()}-${file.originalname}`;
//         cb(null, uniqueName);
//     }
// });

// // Set up multer upload
// const upload = multer({ storage: storage });

// // Handle file upload
// filesRouter.post('/upload', upload.single('file'), (req, res) => {
//     try {
//         if (!req.file) {
//             res.status(400).json({ error: 'No file uploaded' });
//             return;
//         }

//         // Construct the image URL based on your server setup
//         const imageUrl = `${req.protocol}://${req.get('host')}/${req.file.path}`;

//         res.status(200).json({ success: true, message: 'File uploaded successfully', imageUrl });
//     } catch (error) {
//         res.status(500).json({ error: 'Server error' });
//     }
// });

// module.exports = filesRouter;

