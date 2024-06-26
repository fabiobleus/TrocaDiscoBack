import "dotenv/config";
import express from "express";
import cors from "cors";
import "./database/connection.js";
import userRoute from "./routes/userRoute.js";
import advertRoute from "./routes/advertRoute.js";

const app = express();
//MONGO_DB_URL="mongodb+srv://fabiolosteiro:eAN9sTeobj31cT25@banconovo.yod7azz.mongodb.net/TrocaDisco?retryWrites=true&w=majority&appName=BancoNovo"
app.use(express.json());
app.use(cors());

// Create user
app.use("/Api", userRoute,advertRoute);


// login
app.post("/login", async (request, response) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response.status(400).json({ message: "Invalid request body" });
  }

  const userLogin = await User.findOne({ email, password });
  if (!userLogin) {
    return response.status(404).json({ message: "User or password invalid" });
  }
  else if ((userLogin.email != request.body.email) || (userLogin.password != request.body.password)) {
    return response.status(404).json({ message: "User or password invalid 88" });

  };
  return response.status(200).json(userLogin._id);

});


// // Create Advert
// app.post("/Advert", async (request, response) => {
//   const { idUser, title, description, interest, type, category, status, photo } = request.body;

//   if (!idUser || !title || !description || !interest || !type || !category|| !photo) {
//     return response.status(400).json({ message: "Invalid request body" });
//   }
//   const newAdvert = new Advert({ idUser, title, description, interest, type, category, status, photo });
//   await newAdvert.save();

//   return response.status(201).json(newAdvert._id);

// });

app.post("/AdvertPhoto", async (request, response) => {
  const { idAdvert, fileName } = request.body;

  if (!idAdvert || !fileName) {
    return response.status(400).json({ message: "Invalid request body" });
  }
  const newAdvert = new AdvertPhoto({ idAdvert, fileName });
  await newAdvert.save();

  return response.status(201).end();

});


// Listar Produtos
app.get("/Advert", async (request, response) => {

  const adverts = await Advert.find();
  const advertPhoto = await AdvertPhoto.find();


  // const advertsViewr = [{
  //   '$lookup': {
  //     'from': 'AdvertPhoto',
  //     'localField': 'idAdvert',
  //     // 'foreingField': '_id',
  //     'as': 'AdvertPo'
  //   }

  // }];

  // const ads = await Advert.aggregate(advertsViewr);
  // const ads = await Advert.aggregate(advertPhoto);

  // return response.status(200).json({ products: ads });

  //  return response.status(200).json({ products: ads });
   return response.status(200).json({ products: adverts });

});












// // Read
// app.get("/products", async (request, response) => {

//   const products = await Product.find();
//   return response.status(200).json({products: products});

// });

// app.get("/products/:id", async (request, response) => {
// try {
//   const { id } = request.params;
//   const productFind = await Product.findById(id);
//   if (!productFind) {
//     return response.status(404).json({ message: "Product not found" });
//   }

//   return response.status(200).json({product: productFind});
// } catch (error) {
//   return response.status(500).json({ message: "Internal server error" , error: error.message});
// }

// });

// // Update
// app.put("/products/:id", async (request, response) => {

//   const { id } = request.params;
//   const productFind = await Product.findByIdAndUpdate(id, request.body, {new: true});

//   // if (!productFind) {
//   //   return response.status(404).json({ message: "Product not found" });
//   // }

//   return response.status(200).json({product: productFind});
// });

// // Delete
// app.delete("/products/:id", async (request, response) => {
// try {
//   await Product.deleteOne({ _id: request.params.id });
//   return response.status(204).end();
//   // const { id } = request.params;
//   // const productFind = await Product.deleteOne(id);
//   // if (!productFind) {
//   //   return response.status(404).json({ message: "Product not found" });
//   // }

//   // return response.status(204).end();

// } catch (error) {
//   return response.status(500).json({ message: erro.message || "Deu ruim pra cacete" });
// }

// });
app.listen(3000, () => console.log("Server listening on port 3000"));
