import dotenv from 'dotenv';
dotenv.config();
import * as env from 'env-var';

export const envVar = {
  PORT: env.get('PORT').required().asPortNumber(),
  DB: env.get('DB_URL').required().asString(),
  DB_DEV: env.get('DB_DEV'),
};
