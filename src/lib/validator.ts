import { NextFunction, Request, Response } from 'express';
import * as Joi from 'joi';

const joiValidate = (validations) => {
  function validate(req: Request, res: Response, next: NextFunction) {
    const { body } = req;
    const schema = Joi.object(validations);
    const { error, value } = schema.validate(body);
    if (error) {
      return res.status(422).send({ error: error.message });
    } 
    req.body = value;
    return next();
  }

  return validate;
};


export default joiValidate;

