import "dotenv/config";
import express from "express";
import cors from "cors";
import "./database/connection.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";

const app = express();
//MONGO_DB_URL="mongodb+srv://fabiolosteiro:eAN9sTeobj31cT25@banconovo.yod7azz.mongodb.net/TrocaDisco?retryWrites=true&w=majority&appName=BancoNovo"
app.use(express.json());
app.use(cors());

// Create user
app.use("/Api", userRoute,productRoute);


// login
// app.post("/login", async (request, response) => {
//   const { email, password } = request.body;

// });













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
