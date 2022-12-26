import { Router } from 'express';
import ProductController from './components/products/controller';

export default function registerRoutes(): Router {
	const router = Router();
  const productController: ProductController = new ProductController();
  router.use('/products', productController.routes());

	return router;
}
