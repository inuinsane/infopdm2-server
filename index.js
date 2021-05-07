import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is up and running on PORT ${port}`);
});