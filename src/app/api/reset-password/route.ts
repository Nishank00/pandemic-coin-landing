import User from "../../../lib/models/User";
import { formatResponse, generatePassword } from "../../components/utils/helper";

export async function POST(req: Request){
    const body = await req.json();
    const {password, verificationCode} = body;

    if(!password || !verificationCode) return new Response(formatResponse(false, [], 'All fields are mendatory!'));

    const user = await User.findOne({ verificationCode });

    if(!user) return new Response(formatResponse(false, [], 'All fields are mendatory!'));

    user.password = generatePassword(password);
    user.verificationCode = 0;

    try{
        await user.save();
        return new Response(formatResponse(true, [], 'Password reset successfull'));
    }catch(err){
        return new Response(formatResponse(false, [], err.message));
    }
}