import { Router } from 'express';
import { updateBrand, updateCategory, updateEntry, updateProduct, updateSubCategory, updateUser, updateVariety } from '../../../../controllers';

export const upd = Router();

upd.put('/brand/:id',updateBrand);
upd.put('/category/:id',updateCategory);
upd.put('/entry/:id',updateEntry);
upd.put('/product/:id',updateProduct);
upd.put('/subcategory/:id',updateSubCategory);
upd.put('/user/:id',updateUser);
upd.put('/variety/:id',updateVariety);