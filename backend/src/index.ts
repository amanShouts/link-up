import express from 'express';
import dotenv from 'dotenv';
import { getAllUsersRoute, saveUserRoute } from './routes/userRoutes';
const cors = require('cors')

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.json({
        msg: "Server is fine"
    })
})

// /users 
app.use(getAllUsersRoute)

// save-user
app.use(saveUserRoute)

app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})