import express from 'express';
import { productControlers } from './Product.controler';
const Router = express.Router();

Router.post('/products', productControlers.CreateProduct);
Router.get('/products', productControlers.getProduct);
Router.get('/products/:productId', productControlers.getSingleProduct);
Router.put('/products/:productId', productControlers.updateAsingleprodcut);
Router.delete('/products/:productId', productControlers.deleteAsingleprodcut);

export const ProductRout = Router;
