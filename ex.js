// const storage = new GridFsStorage({
//     url,
//     file: (req, file) => {
//       //If it is an image, save to photos bucket
//       if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//         return {
//           bucketName: "photos",
//           filename: `${Date.now()}_${file.originalname}`,
//         }
//       } else {
//         //Otherwise save to default bucket
//         return `${Date.now()}_${file.originalname}`
//       }
//     },
//   })

// const upload = multer({ storage });