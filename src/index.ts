import express from 'express';
import { sequelize } from './config/database';
import hotelRoutes from './routes/hotelRoutes';

const app = express();
app.use(express.json());

app.use('/hotels', hotelRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch(error => console.error('Unable to connect to the database:', error));
