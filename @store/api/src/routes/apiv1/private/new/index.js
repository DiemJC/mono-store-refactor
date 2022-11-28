import { Router } from 'express';
import { createBrand, createCategory, createEntry, createProduct, createSubCategory, createUser, createVariety } from '../../../../controllers';

export const nvo = Router();

nvo.post('/brand',createBrand);
nvo.post('/category',createCategory);
nvo.post('/entry',createEntry);
nvo.post('/product',createProduct);
nvo.post('/subcategory',createSubCategory);
nvo.post('/user',createUser);
nvo.post('/variety',createVariety);
