import { createToken } from '.';
import { UserModel } from '../models';
import { checkPassword, hashPassword } from '../services/passwords';

export const SignIn = async (req,res,next) => {
    try {
        const { email , password } = req.body;
        const user = await UserModel.findOne({email});
        if(!user) return res.status(401).send({message:'Usuario y/o contraseña inválidos'});
        const hash = await UserModel.findOne({email}).select('password');
        const { isValid } = await checkPassword(password,hash);
        if(!isValid) return res.status(401).send({success:false,message:'Usuario y/o contraseña inválidos'});
        await UserModel.findByIdAndUpdate(user._id,{lastlogin:Date.now()});
        const token = createToken(user);
        res.status(200).send({success:true,message:'Bienvenid@ de nuevo',token,id:user._id,role:user.role});
    } catch (error) {
        next(error);
    }
};

export const SignUp = async (req,res,next) => {
    try {
        const { password } = req.body;
        req.body.password = await hashPassword(password);
        const user = new UserModel(req.body);
        const userSaved = await user.save();
        const token = createToken(userSaved);
        return res.status(200).send({success:true,message:'Registrado exitosamente',token});
    } catch (error) {
        next(error);
    }
}


export const createUser = async (req,res,next) => {
    try {
        const { password } = req.body;
        req.body.password = await hashPassword(password);
        const doc = new UserModel(req.body);
        await doc.save();
        return {success:true,message:'Registro exitoso'};
    } catch (error) {
        next(error);
    }
}

export const getUsers = async (req,res,next) => {
    try {
        const docs = await UserModel.find();
        if(docs.length === 0) return res.status(404).send({success:false,docs,message:'Sin registros'});
        return res.status(200).send({success:true,docs,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}

export const getUserById = async (req,res,next) => {
    try {
        const doc = await UserModel.findById(req.params.id);
        if(!doc) return res.status(404).send({success:false,message:'Registro no encontrado'});
        res.status(200).send({success:true,message:'Petición completada',doc});
    } catch (error) {
        next(error);
    }
}

export const updateUser = async (req,res,next) => {
    try {
        if(req.body.pasword) {
            const { password } = req.body;
            req.body.password = await hashPassword(password);
        }
        const old = await UserModel.findByIdAndUpdate(req.params.id,req.body);
        return res.status(200).send({success:true,message:'Petición completada',update:req.body,old});
    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req,res,next) => {
    try {
        await UserModel.findByIdAndRemove(req.params.id);
        return res.status(200).send({success:true,message:'Petición completada'});
    } catch (error) {
        next(error);
    }
}