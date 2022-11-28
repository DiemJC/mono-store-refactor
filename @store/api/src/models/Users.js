import { Schema , model } from 'mongoose';

const User = new Schema({
    names:{type:String,required:true},
    lastnames:{type:String,required:true},
    avatar:{type:String},
    email:{type:String,required:true,unique:true,lowercase:true},
    password:{type:String,required:true,select:false},
    role:{type:String,required:true,enum:['dev','adm','scout','user','client']},
    createdAt:{type:Date,default:Date.now()},
    lastlogin:{type:Date}
})

export const UserModel = model('User',User);