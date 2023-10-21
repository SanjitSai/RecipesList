import 'dotenv/config'

import express from 'express'
import cors from 'cors'
import moongose from 'mongoose'

import {userRouter} from './routes/users.js'
import {recipesRouter} from './routes/recipes.js'

const app = express();
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

 moongose.connect(
    "mongodb+srv://sanjitsaikolla:Sanjit124@recipes.oy4uun6.mongodb.net/recipes?retryWrites=true&w=majority",
    { 
        
      }
    );

app.listen(3004, () => console.log("Server started"));