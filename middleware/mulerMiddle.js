// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const { getDbWithCollection } = require('../../db/mongo');

// // Set up Multer storage for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads'); // Destination folder for uploaded files
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname); // Unique filename
//   },
// });

// // Initialize Multer with storage options
// const upload = multer({ storage: storage });

// // Handle POST request to '/api/products'
// router.post('/', upload.single('image'), async (req, res) => {
//   const db = getDbWithCollection('products');

//   try {
//     const { file } = req; // Access the uploaded file object
//     // Assuming 'file' contains the path or metadata of the saved image
//     const { insertedId } = await db.insertOne({ image: file.path, ...req.body });

//     res.status(201).send({ insertedId });
//   } catch (err) {
//     console.error('Error saving product:', err);
//     res.status(500).send({ error: 'Internal Server Error' });
//   }
// });

// module.exports = router;
