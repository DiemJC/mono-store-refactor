import { Schema , model } from 'mongoose';

const Product = new Schema({
    cover:{type:String,required:true}, 
    brand:{type:Schema.ObjectId,ref:'Brand'}, //---
    sub:{type:Schema.ObjectId,ref:'SubCategory'}, //----
    name:{type:String,required:true,unique:true}, //----
    slug:{type:String,required:true}, //----
    price:{type:Number,default:0}, //----
    //--Sin agregar en productos agregar en update --//
    //stock:{type:Number,default:0}, //Input number
    updatedAt:{type:Date},
    //---NO SE AGREGAN --//
    //No se coloca de momento
    extracto:{type:String}, // ?
    discount:{type:Boolean,default:false}, //No se gregaria
    status:{type:Boolean,default:false}, 
    createdAt:{type:Date,default:Date.now()} //Se crea por defecto
});

export const ProductModel = model('Product',Product);