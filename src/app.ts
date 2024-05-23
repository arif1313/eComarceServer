import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRout } from './Product/Product.routes';
export const app: Application = express();

app.use(express.json());
app.use(cors());
app.use('/ecomarce/v1/api', ProductRout);
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});
app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'hello this is my ecomarce server ' });
});
