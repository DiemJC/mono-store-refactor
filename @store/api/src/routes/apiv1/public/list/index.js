import { Router } from 'express';
import { getBrands, getCategories, getEntries, getProducts, getSubCategories, getUsers, getVarieties } from '../../../../controllers';

export const list = Router();

list.get('/brands',getBrands);
list.get('/categories',getCategories);
list.get('/entries',getEntries);
list.get('/products',getProducts);
list.get('/subcategories',getSubCategories);
list.get('/users',getUsers);
list.get('/varieties',getVarieties);