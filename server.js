const express = require ("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());

const distaceRouter = require ("./router/distance");

app.use("/api/distance",distaceRouter)



const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`server is running at ${PORT}`));


