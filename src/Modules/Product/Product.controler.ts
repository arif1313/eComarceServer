import { Request, Response } from 'express';
import { productService } from './Product.service';
import { ZodError, object, z } from "zod";
import { TProductSchema } from './Product.validation';
const CreateProduct = async (req: Request, res: Response) => {
  try {
    //zod validatin 
  
    const product = req.body;
    const zodParseData=TProductSchema.parse(product)
  
    const result = await productService.createproductDbLInk(zodParseData);
    res.status(200).json({
      success: true,
      message: 'producct creeat success',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
        success: false,
        message: 'somethign worng',
        error: err
        // error: err.issues.message,
      });
  }
};
const getProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.GetProductFromDB();
    res.status(200).json({
      success: true,
      message: 'products got success',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const product = req.params;
    const result = await productService.GetAsingleProductFromDB(
      product.productId,
    );
    res.status(200).json({
      success: true,
      message: 'single product success',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const updateAsingleprodcut = async (req: Request, res: Response) => {
    try {
      const product = req.params;
      const result = await productService.updateAsingleProductFromDB(
        product.productId,
      );
      res.status(200).json({
        success: true,
        message: 'single update success',
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
  };
export const productControlers = {
  CreateProduct,
  getProduct,
  getSingleProduct,
  updateAsingleprodcut
};
