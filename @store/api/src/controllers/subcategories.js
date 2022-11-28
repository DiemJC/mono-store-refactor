import { SubCategoryModel } from '../models';

export const createSubCategory = async (req,res,next) => {
    try {
        const doc = new SubCategoryModel(req.body);
        await doc.save();
        return {success:true,message:'Registro exitoso'};
    } catch (error) {
        next(error);
    }
}

export const getSubCategories = async (req,res,next) => {
    try {
        const docs = await SubCategoryModel.find().populate('category');
        if(docs.length === 0) return res.status(404).send({success:false,docs,message:'Sin registros'});
        return res.status(200).send({success:true,docs,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}

export const getSubCategoryById = async (req,res,next) => {
    try {
        const doc = await SubCategoryModel.findById(req.params.id).populate('category');;
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        res.status(200).send({success:true,message:'Petición completada',doc});
    } catch (error) {
        next(error);
    }
}

export const updateSubCategory = async (req,res,next) => {
    try {
        const old = await SubCategoryModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({success:true,message:'Petición completada',update:req.body,old});
    } catch (error) {
        next(error);
    }
}

export const deleteSubCategory = async (req,res,next) => {
    try {
        await SubCategoryModel.findByIdAndRemove(req.params.id);
        return res.status(200).send({success:true,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}