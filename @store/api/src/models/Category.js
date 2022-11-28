import { Schema , model } from 'mongoose';

const Category = new Schema({
    name:{type:String,required:true,unique:true},
    slug:{type:String,required:true},
    status:{type:Boolean,default:false},
    createdAt:{type:Date,default:Date.now()}
});

export const CategoryModel = model('Category',Category);