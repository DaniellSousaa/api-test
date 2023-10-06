import express from 'express';
import categoriesRouter from './routes/categories.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/categories', categoriesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
