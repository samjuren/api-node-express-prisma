import express from "express";
import { prisma } from "./src/db.js";

const app = express();

app.get("/user", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    console.log("Erro ao buscar usuários: ", error);
  }
});

app.get("/veiculo", async (req, res) => {
  try {
    const veiculo = await prisma.veiculo.findMany();
    res.json(veiculo);
  } catch (error) {
    console.log("Erro ao buscar veiculos: ", error);
  }
});

//rota dinamica

app.get("/:id", async (req, res) => {
  const veiculoId = req.params.id;
  try {
    const veiculo = await prisma.veiculo.findUnique({
      where: {
        id: veiculoId,
      },
    });

    console.log(veiculoId);
    res.json(veiculo);
  } catch (error) {
    console.log("Erro ao buscar usuário por ID: ", error);
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando - porta 3000 - http://localhost:3000/");
});
