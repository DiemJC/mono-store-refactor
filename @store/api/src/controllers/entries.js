import { EntryModel } from '../models';

export const createEntry = async (req,res,next) => {
    try {
        const doc = new EntryModel(req.body);
        await doc.save();
        return {success:true,message:'Registro exitoso'};
    } catch (error) {
        next(error);
    }
}

export const getEntries = async (req,res,next) => {
    try {
        const docs = await EntryModel.find().populate('variety');
        if(docs.length === 0) return res.status(404).send({success:false,docs,message:'Sin registros'});
        return res.status(200).send({success:true,docs,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}

export const getEntryById = async (req,res,next) => {
    try {
        const doc = await EntryModel.findById(req.params.id).populate('variety');;
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        res.status(200).send({success:true,message:'Petición completada',doc});
    } catch (error) {
        next(error);
    }
}

export const updateEntry = async (req,res,next) => {
    try {
        const old = await EntryModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({success:true,message:'Petición completada',update:req.body,old});
    } catch (error) {
        next(error);
    }
}

export const deleteEntry = async (req,res,next) => {
    try {
        await EntryModel.findByIdAndRemove(req.params.id);
        return res.status(200).send({success:true,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}