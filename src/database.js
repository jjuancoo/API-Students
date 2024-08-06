import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://juancodb:2315juanco@cluster0.busmaue.mongodb.net/schoolcontroldb?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Conectado a mongodb"))
  .catch((error) => console.log("Error al conectar", error));

export default mongoose