import { VarietyModel } from '../models';

export const createVariety = async (req,res,next) => {
    try {
        const doc = new VarietyModel(req.body);
        await doc.save();
        return {success:true,message:'Registro exitoso'};
    } catch (error) {
        next(error);
    }
}

export const getVarieties = async (req,res,next) => {
    try {
        const docs = await VarietyModel.find().populate('createdBy').populate({path:'product',populate:{path:'sub',populate:{path:'category'}}});
        if(docs.length === 0) return res.status(404).send({success:false,docs,message:'Sin registros'});
        return res.status(200).send({success:true,docs,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}

export const getVarietyById = async (req,res,next) => {
    try {
        const doc = await VarietyModel.findById(req.params.id).populate('createdBy').populate({path:'product',populate:{path:'sub',populate:{path:'category'}}});
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        res.status(200).send({success:true,message:'Petición completada',doc});
    } catch (error) {
        next(error);
    }
}

export const updateVariety = async (req,res,next) => {
    try {
        const old = await VarietyModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({success:true,message:'Petición completada',update:req.body,old});
    } catch (error) {
        next(error);
    }
}

export const deleteVariety = async (req,res,next) => {
    try {
        await VarietyModel.findByIdAndRemove(req.params.id);
        return res.status(200).send({success:true,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}