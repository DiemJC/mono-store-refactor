export const  ErrorMiddleware = (err,req,res,next) => {
    console.error(err);
    return res.status(500).send({message:'Error de servidor',err});
}