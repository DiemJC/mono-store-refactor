import { ProductModel } from '../models';

export const createProduct = async (req,res,next) => {
    try {
        const doc = new ProductModel(req.body);
        await doc.save();
        return {success:true,message:'Registro exitoso'};
    } catch (error) {
        next(error);
    }
}

export const getProducts = async (req,res,next) => {
    try {
        const docs = await ProductModel.find().populate('brand').populate({path:'sub',populate:{path:'category'}});
        if(docs.length === 0) return res.status(404).send({success:false,docs,message:'Sin registros'});
        return res.status(200).send({success:true,docs,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}

export const getProductById = async (req,res,next) => {
    try {
        const doc = await ProductModel.findById(req.params.id).populate('brand').populate({path:'sub',populate:{path:'category'}});
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        res.status(200).send({success:true,message:'Petición completada',doc});
    } catch (error) {
        next(error);
    }
}

export const updateProduct = async (req,res,next) => {
    try {
        const old = await ProductModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({success:true,message:'Petición completada',update:req.body,old});
    } catch (error) {
        next(error);
    }
}

export const deleteProduct = async (req,res,next) => {
    try {
        await ProductModel.findByIdAndRemove(req.params.id);
        return res.status(200).send({success:true,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}