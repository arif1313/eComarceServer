import { ProductModel } from '../Modules/Product.model';
import { TProduct } from './Product.interface';

const createproductDbLInk = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};
const GetProductFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};
const GetAsingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};
const updateAsingleProductFromDB = async (id: string) => {
  const result = await ProductModel.updateOne(
    { _id: id },
    {
      $set: {
        'inventory.quantity': 49,
      },
    },
  );
  return result;
};
const DeleteAsingleProductFromDB = async (id: string) => {
  await ProductModel.deleteOne({ _id: id });
  const result = await ProductModel.findOne({ _id: id });
  return result;
};
const SearchAsingleProductFromDB = async (name: string) => {
 
    const query = { name: name };
    const result = await ProductModel.findOne(query);
    return result;
 
};

export const productService = {
  createproductDbLInk,
  GetProductFromDB,
  GetAsingleProductFromDB,
  updateAsingleProductFromDB,
  DeleteAsingleProductFromDB,
  SearchAsingleProductFromDB,
};
