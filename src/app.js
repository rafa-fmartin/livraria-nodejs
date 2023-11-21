import express from "express";
import conectaNoDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Conexão com banco de dados
const conexao = await conectaNoDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso");
});

// Inicialização do app 
const app = express();
routes(app);

export default app;