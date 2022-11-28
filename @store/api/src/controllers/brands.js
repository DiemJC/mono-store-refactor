import { BrandModel } from '../models';

export const createBrand = async (req,res,next) => {
    try {
        const doc = new BrandModel(req.body);
        await doc.save();
        return {success:true,message:'Registro exitoso'};
    } catch (error) {
        next(error);
    }
}

export const getBrands = async (req,res,next) => {
    try {
        const docs = await BrandModel.find();
        if(docs.length === 0) return res.status(404).send({success:false,docs,message:'Sin registros'});
        return res.status(200).send({success:true,docs,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}

export const getBrandById = async (req,res,next) => {
    try {
        const doc = await BrandModel.findById(req.params.id);
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        res.status(200).send({success:true,message:'Petición completada',doc});
    } catch (error) {
        next(error);
    }
}

export const updateBrand = async (req,res,next) => {
    try {
        const old = await BrandModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({success:true,message:'Petición completada',update:req.body,old});
    } catch (error) {
        next(error);
    }
}

export const deleteBrand = async (req,res,next) => {
    try {
        await BrandModel.findByIdAndRemove(req.params.id);
        return res.status(200).send({success:true,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}