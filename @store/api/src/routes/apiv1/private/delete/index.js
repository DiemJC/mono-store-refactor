import { Router } from 'express';
import { deleteBrand, deleteCategory, deleteEntry, deleteProduct, deleteSubCategory, deleteUser, deleteVariety } from '../../../../controllers';

export const del = Router();

del.delete('/brand/:id',deleteBrand);
del.delete('/category/:id',deleteCategory);
del.delete('/entry/:id',deleteEntry);
del.delete('/product/:id',deleteProduct);
del.delete('/subcategory/:id',deleteSubCategory);
del.delete('/user/:id',deleteUser);
del.delete('/variety/:id',deleteVariety);