import { ProductModel } from '../Product.model';
import { TProduct } from './Product.interface';

const createproductDbLInk = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
const GetProductFromDB = async () => {
    const result = await ProductModel.find();
    return result;
  };
  const GetAsingleProductFromDB = async (id:string) => {
    const result = await ProductModel.findOne({_id:id});
    return result;
  };
export const productService = {
  createproductDbLInk,
  GetProductFromDB,
  GetAsingleProductFromDB
};
