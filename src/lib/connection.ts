import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import Environment from '../environments/environment';

const env: Environment = new Environment();

const modelPath = path.join(__dirname, '../');

const connection = new Sequelize({
  database: env.DB_NAME,
  host: env.DB_HOST,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  dialect: 'mysql',
  pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  },
  modelPaths: [`${modelPath}/models`],
  logging: false,
});

export default connection;