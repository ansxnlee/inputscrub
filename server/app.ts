import express from 'express';
import cors from 'cors';
import { CORSORIGIN } from './utils/constants';

const app = express();

app.use(express.json());

const corsOptions = {
  origin: CORSORIGIN,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

module.exports = app;