import jwt from 'jwt-simple';
import dayjs from 'dayjs';

const secret = process.env.SECRET;

export const createToken = (user) => {
    const payload = {
        iat:dayjs(),
        exp:dayjs().add(1,'hour'),
        sub:user._id,
        role:user.role,
    }
    const token = jwt.encode(payload,secret);
    return token;
}