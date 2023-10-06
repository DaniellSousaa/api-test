import express from 'express';
import categoriesRouter from './routes/categories.js';

const app = express();

app.use('/api/categories', categoriesRouter);

export default app;
