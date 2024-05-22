import { productService } from '../Product/Product.service';
import { TorderProduct } from './Order.interface';
import { OrderProductModel } from './Order.model';

const createOrderDblink = async (order: TorderProduct) => {
  const orderContity: number = order.quantity;
  const mainProduct = await productService.GetAsingleProductFromDB(
    order.productId,
  );

  if (!mainProduct || !mainProduct.inventory) {
    return {
      success: false,
      message: 'Product not found or inventory details missing',
    };
  }
  if (orderContity > mainProduct.inventory.quantity) {
    return {
      success: false,
      message: 'Ordered quantity exceeds available inventory',
    };
  }
  try {
    // Create the order
    const result = await OrderProductModel.create(order);

    // Optionally update inventory here if needed
    mainProduct.inventory.quantity -= orderContity;
    await mainProduct.save();

    return result;
  } catch (error) {
    return error;
  }
};

//     if(mainProduct.inventory.quantity){
//         if(orderContity>=mainProduct?.inventory.quantity){
//             const result = await OrderProductModel.create(order);
//             return result;

//     }

//    }

const getOrdersDblink = async () => {
  const result = await OrderProductModel.find();
  return result;
};
export const orderService = {
  createOrderDblink,
  getOrdersDblink,
};
