import { Schema , model } from 'mongoose';

const Variety = new Schema({
    id:{type:String,required:true,unique:true}, //Field focusable 
    label:{type:String,required:true}, //Field
    thumbnail:{type:String,required:true}, //FieldFile
    product:{type:Schema.ObjectId,ref:"Product"}, //FieldSelect
    stock:{type:Number,default:0}, //Field
    createdAt:{type:Date,default:Date.now()},
    updatedAt:{type:Date},
    updatedBy:{type:Schema.ObjectId,ref:'User'}
});

export const VarityModel = model('Variety',Variety);