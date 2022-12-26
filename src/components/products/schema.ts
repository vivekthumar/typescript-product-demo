import * as Joi from 'joi';

export const ProductListSchema = {
  limit: Joi.number().required().label('Limit'),
  offset: Joi.number().required().label('Offset'),
  search: Joi.string().optional().label('Search'),
  sort: Joi.array().optional().label('Sort'),
};

export const OrderSchema = {
  productId: Joi.number().required().label('Product Id'),
  quantity: Joi.number().required().label('Product Id'),
};
