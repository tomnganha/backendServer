const express = require("express");
var cors = require("cors");

const connection = require("./connection");
const userRouter = require("./routers/user");
const categoryRoute = require("./routers/category");
const productRoute = require("./routers/product");
const billRouter = require("./routers/bill");

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/user", userRouter);
app.use("/category", categoryRoute);
app.use("/product", productRoute);
app.use("/bill", billRouter);

module.exports = app;
