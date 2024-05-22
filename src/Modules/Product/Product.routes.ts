import express from 'express';
import { productControlers } from './Product.controler';
const Router = express.Router();

Router.post('/products', productControlers.CreateProduct);
Router.get('/products', productControlers.getProduct);

export const ProductRout = Router;
