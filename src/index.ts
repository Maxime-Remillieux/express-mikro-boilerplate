import 'reflect-metadata';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { mikroOrmInit } from './lib/mikro';

dotenv.config();
const app = express();
app.use(express.json());

app.get('/api/ping', (req: Request, res: Response) => {
    res.send('pong');
});

const start = async () => {
  const orm = await mikroOrmInit();
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port', process.env.PORT || 3000);
  });
};

start();