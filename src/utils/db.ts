import { connect } from 'mongoose';
import { envVar } from './config';

export const connectDB = async () => {
  try {
    await connect(envVar.DB);
    console.log('Connected with DB');
  } catch (error) {
    console.log('Unable to connect with DB');
    process.exit(1);
  }
};
