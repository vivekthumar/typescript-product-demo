import 'jest';
import request from 'supertest';
import {
    StatusCodes,
} from 'http-status-codes';

describe('status integration tests', () => {
    it('Get Product List', async () => {
      await request('http://localhost:3146/')
          .post('api/products/list')
          .set('Accept', 'application/json')
          .send({
            "limit": 10,
            "offset": 0,
          })
          .expect(StatusCodes.OK);
    });

    it('Create Order', async () => {
      await request('http://localhost:3146/')
          .post('api/products/order')
          .set('Accept', 'application/json')
          .send({
            "productId": 2,
            "quantity": 2,
          })
          .expect(StatusCodes.OK);
  });

});
