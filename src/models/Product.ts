import { Table, Column, Model } from 'sequelize-typescript';

@Table({ timestamps: true })
class Product extends Model {

  @Column title: string;

  @Column desc: string;

  @Column image: string;

  @Column price: number;

  @Column quantity: number;
}

export default Product;
