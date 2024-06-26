const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

// const itemsRouter = require("./items/router");

// router.use("/items", itemsRouter);

const programRouter = require("./programs/router");

router.use("/programs", programRouter);
/* ************************************************************************* */

module.exports = router;
