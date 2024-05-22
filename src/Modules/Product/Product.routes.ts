import express from 'express';
import { productControlers } from './Product.controler';
import { orderService } from '../OrderManage/Order.service';
import { orderControls } from '../OrderManage/Order.controles';
const Router = express.Router();

Router.post('/products', productControlers.CreateProduct);
Router.get('/products', productControlers.getProduct);
Router.get('/products/:productId', productControlers.getSingleProduct);
Router.put('/products/:productId', productControlers.updateAsingleprodcut);
Router.delete('/products/:productId', productControlers.deleteAsingleprodcut);
// Router.get('/products', productControlers.searcProdcutByQury);

Router.post('/orders', orderControls.CreateOrder);
Router.get('/orders', orderControls.getOrders);
export const ProductRout = Router;
