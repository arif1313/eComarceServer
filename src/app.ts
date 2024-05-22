import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRout } from './Product/Product.routes';
export const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/ecomarce/v1/api', ProductRout);
app.get('/', (req: Request, res: Response) => {
  const a = 2;
  res.send(a);
});
