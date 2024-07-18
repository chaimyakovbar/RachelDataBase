// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const { postTodoHandler, deleteDelete, getTodoByIdHandler } = require("../handlers/Products");

// // Multer configuration
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });

// const upload = multer({ storage });

// router.get("/", getTodoByIdHandler);
// router.delete("/delete/:id", deleteDelete);
// router.post("/", upload.single('image'), postTodoHandler);

// module.exports = router;
