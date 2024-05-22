import { TorderProduct } from "./Order.interface";
import { OrderProductModel } from "./Order.model";

const createOrderDblink = async (product: TorderProduct) => {
    const result = await OrderProductModel.create(product);
    return result;
  };
  export const orderService={
    createOrderDblink
  }