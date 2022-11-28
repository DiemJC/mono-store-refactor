import { Router } from 'express';
import { getBrandById, getCategoryById, getEntryById, getProductById, getSubCategoryById, getUserById, getVarietyById } from '../../../../controllers';

export const byid = Router();

byid.get('/brand/:id',getBrandById);
byid.get('/category/:id',getCategoryById);
byid.get('/entry/:id',getEntryById);
byid.get('/product/:id',getProductById);
byid.get('/subcategory/:id',getSubCategoryById);
byid.get('/user/:id',getUserById);
byid.get('/variety/:id',getVarietyById);