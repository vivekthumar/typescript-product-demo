/* eslint-disable no-throw-literal */
import { Request, Response, Router } from 'express';
import { WhereOptions, Op, Order } from 'sequelize';
import joiValidate from '../../lib/validator';
import OrderModel from '../../models/Order';
import ProductModel from '../../models/Product';
import { ProductListSchema, OrderSchema } from './schema';
import { ProductResponse, product } from './types';


export default class ProductController {
  protected router: Router;

  constructor() {
    this.router = Router();
  }

	public routes(): Router {
		this.router.post('/list', joiValidate(ProductListSchema), (req: Request, res: Response) => {this.getProductList(req, res);});
    this.router.post('/order', joiValidate(OrderSchema), (req: Request, res: Response) => {this.order(req, res);});
		return this.router;
	}

  async order( req: Request, res: Response ) {
		try {
      const { body } = req;
      const { productId, quantity } = body;
      
      const productData: product = await ProductModel.findOne({
        where: {
          id: productId,
        }
      });

      if (!productData) {
        throw ({ 'message':'Product Id not Found' });
      } 

      await OrderModel.create({
        productId,
        quantity,
        price: quantity * productData.price
      });
	
			return res.send('Order Created');
		} catch (err) {
      return res.status(500).send({
        message: err.message || 'Internal Error.',
      });
		}
	}

	async getProductList( req: Request, res: Response ) {
		try {
      const { body } = req;
      const { limit, offset, search, sort } = body;
      const query: {
        limit: number
        offset: number
        order?: Order,
        raw: boolean,
        search?: string,
        where?: WhereOptions,
      } = { limit, offset, raw:true };
      if (sort) {
        query.order = [sort];
      }

      if (search) {
        query.where = {
          [Op.or]: [
              { title: {  [Op.like]: `%${search}%` }  },
              { desc: { [Op.like]: `%${search}%` }  },
          ]
        };
      }

      const products: product[] = await ProductModel.findAll(query);
  
			const response: ProductResponse = {
				data: products,
			};
			return res.send(response);
		} catch (err) {
			return res.status(500).send({
        message: err.message || 'Internal Error.',
      });
		}
	}
}
