import express from 'express';
import { connectToDB } from '../lib/mongodb.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { db } = await connectToDB();
    const categories = await db.collection('categories').find().toArray();
    const categoryNames = categories.map(category => category.Name);
    res.status(200).json({ data: categoryNames });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar categorias', error: error.message });
  }
});

export default router;
