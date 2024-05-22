import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
    res.json({
        msg: "Server is fine"
    })
})

app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})