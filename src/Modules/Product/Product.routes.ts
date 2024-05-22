import express from 'express';
import { productControlers } from './Product.controler';
const Router = express.Router();

Router.post('/products', productControlers.CreateProduct);
Router.get('/products', productControlers.getProduct);
Router.get('/products/:id', productControlers.getSingleProduct);

export const ProductRout = Router;
