import { Schema , model } from 'mongoose';

const SubCategory = new Schema({
    label:{type:String,required:true},
    category:{type:Schema.ObjectId,ref:'Category',required:true}
});

export const SubCategoryModel = model('SubCategory',SubCategory);