import express from "express";
import { router } from "../routes/pagos.routes.js";
import { puerto } from "./config.js";

const app = express();

app.use(express.json());
app.use(router);

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
