import express from 'express';
import carRoute from './Routes/CarsRoute';
import motoRoute from './Routes/MotorcyclesRoute';

const app = express();
app.use(express.json());
app.use(carRoute);
app.use('/motorcycles', motoRoute);

export default app;
