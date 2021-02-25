import 'reflect-metadata';
import express from 'express';
import './database';

const app = express();

app.get("/users", (req, res) => {
    return res.json({ message: "Show me users please!!" });
});

app.post("/", (req, res) => {
    // Recebeu dados para salvar
    return res.json({ message: "Success!!!" })
});

app.listen(3333, () => console.log('🖥  Server is running on port 3333'));