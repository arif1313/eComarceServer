import { Request, Response } from 'express';
import { productService } from './Product.service';

const CreateProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;
    const result = await productService.createproductDbLInk(product);
    res.status(200).json({
      success: true,
      message: 'producct creeat success',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getProduct = async (req: Request, res: Response) => {
    try {
     
      const result = await productService.GetProductFromDB();
      res.status(200).json({
        success: true,
        message: 'producct creeat success',
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
export const productControlers = {
  CreateProduct,
  getProduct
};
