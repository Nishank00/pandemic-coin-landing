import { cookies } from "next/headers";
import User from "../../../lib/models/User";
import { comparePasswords, formatResponse, generateAccessToken } from "../../components/utils/helper";

export async function POST(req: Request){
    const {email, password} = await req.json();

    const user = await User.findOne({email})

    try{
        if(!user){
            return new Response(formatResponse(false, [], 'User does not exist!'));
        }else if(!comparePasswords(password, user?.password)){
            return new Response(formatResponse(false, [], 'Invalid username or password!'));
        }else if(!user.isVerified){
            return new Response(formatResponse(false, {isVerified: false}, 'User not Verified!'));
        }
    
    
        const userData = {
            id: user._id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.email,
            isVerified: user?.isVerified,
            kycStatus: user?.kycStatus,
            agreedTerms: user?.agreedTerms,
        }   
        const accessToken = generateAccessToken({email, userId: user._id});
        cookies().set("access-token", accessToken)
        return new Response(formatResponse(true, {user: userData, accessToken}, 'Login Successfull'))
    }catch(err){
        return new Response(formatResponse(false, [], err.message));
    }

}