import express from 'express';
import cors from 'cors';
import categoriesRouter from './routes/categories.js';

const app = express();

// Use o middleware CORS
app.use(cors());

app.use('/api/categories', categoriesRouter);

// Exporte o app para uso com Vercel
export default app;
