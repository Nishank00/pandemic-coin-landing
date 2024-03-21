import User from "../../../lib/models/User";
import { formatResponse } from "../../components/utils/helper";

export async function POST(req: Request){
    const {verificationCode} = await req.json();

    const user = await User.findOne({verificationCode: Number(verificationCode)})

    if(!user){
        return new Response(formatResponse(false, [], 'Invalid Verfication Code!'));
    }

    user.isVerified = true;

    try{
        await user.save();
        return new Response(formatResponse(true, {verificationCode: verificationCode}, 'User verified Successfully'));
    }catch(err){
        return new Response(formatResponse(false, [], err?.message || 'Something went wrong!'));
    }

}

//chnage