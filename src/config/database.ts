import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error('DATABASE_URL environment variable is not defined');
  process.exit(1);
} else {
  console.log(`Connecting to database at: ${databaseUrl}`);
}

export const sequelize = new Sequelize(databaseUrl, {
  dialect: 'postgres',
});
