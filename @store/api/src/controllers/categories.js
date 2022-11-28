import { CategoryModel } from '../models';

export const createCategory = async (req,res,next) => {
    try {
        const doc = new CategoryModel(req.body);
        await doc.save();
        return {success:true,message:'Registro exitoso'};
    } catch (error) {
        next(error);
    }
}

export const getCategories = async (req,res,next) => {
    try {
        const docs = await CategoryModel.find();
        if(docs.length === 0) return res.status(404).send({success:false,docs,message:'Sin registros'});
        return res.status(200).send({success:true,docs,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}

export const getCategoryById = async (req,res,next) => {
    try {
        const doc = await CategoryModel.findById(req.params.id);
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        res.status(200).send({success:true,message:'Petición completada',doc});
    } catch (error) {
        next(error);
    }
}

export const updateCategory = async (req,res,next) => {
    try {
        const old = await CategoryModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({success:true,message:'Petición completada',update:req.body,old});
    } catch (error) {
        next(error);
    }
}

export const deleteCategory = async (req,res,next) => {
    try {
        await CategoryModel.findByIdAndRemove(req.params.id);
        return res.status(200).send({success:true,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}