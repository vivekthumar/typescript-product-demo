import { Table, Column, ForeignKey, Model } from 'sequelize-typescript';
import Product from './Product';

@Table({ timestamps: true })
class Order extends Model {

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @Column quantity: number;

  @Column price: number;
}

export default Order;
