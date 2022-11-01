const { Router } = require("express");
const users = require("../controller/user/addUser");
const posts = require("../controller/post/");
const express = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = express.Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());

router.use("/user", users);
router.use("/post", posts);

module.exports = router;
