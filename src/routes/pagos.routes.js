import express from "express";
import { Router } from "express";
import { crearSesion } from "../controllers/pagos.controller.js";
import path from "path";

const router = Router();

router.use(express.static(path.resolve("src/public")));

router.post("/crear-sesion-de-pago", crearSesion);

router.get("/exitoso", (req, res) => {
  res.sendFile(path.resolve("src/public/exito.html"));
});

router.get("/cancelado", (req, res) => {
  res.redirect("/");
});

export { router };
