import User from "../../../lib/models/User";
import { formatResponse, verifyAccessToken } from "../../components/utils/helper";

export async function GET(req: Request){
    if(!req.headers.has('authorization')){
        return new Response(formatResponse(false, [], 'No Authorization Token!'))
    }
    const token = req.headers.get('authorization')?.split(" ")[1];
    const userData:any = verifyAccessToken(token)
    if(!userData){
        return new Response(formatResponse(false, [], 'Invalid Authorization Token!'))
    }
    const user:any = await User.findById(userData.userId)
    
    user.agreedTerms = true

    try{
        await user.save();
        return new Response(formatResponse(true, [], 'Terms agreed'))
    }catch(err){
        return new Response(formatResponse(false, [], err.message))
    }


}