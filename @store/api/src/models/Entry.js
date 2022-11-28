import { Schema , model } from 'mongoose';

const Entry = new Schema({
    variety:{type:Schema.ObjectId,ref:'Variety'},
    date:{type:Date,default:Date.now()},
    count:{type:Number,default:0},
    ammount:{type:Number,default:0}
});

export const EntryModel = model('Entry',Entry);