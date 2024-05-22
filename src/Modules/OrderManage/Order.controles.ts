import { Request, Response } from "express";
import { TorderProductSchema } from "./Order.validation";
import { orderService } from "./Order.service";

const CreateOrder = async (req: Request, res: Response) => {
    try {
      //zod validatin 
    
      const Order = req.body;
      const zodParseData=TorderProductSchema.parse(Order)
      const result = await orderService.createOrderDblink(zodParseData);
      res.status(200).json({
        success: true,
        message: 'order creeat success',
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
  const getOrders = async (req: Request, res: Response) => {
    try {
  
      const result = await orderService.getOrdersDblink();
      res.status(200).json({
        success: true,
        message: 'order got success',
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
  export const orderControls={
    CreateOrder,
    getOrders
  }