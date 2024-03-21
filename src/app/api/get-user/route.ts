import { cookies } from "next/headers";
import User from "../../../lib/models/User";
import { formatResponse, verifyAccessToken } from "../../components/utils/helper";

export async function GET(req: Request){
    const tokenData:any = cookies().get('access-token')
    const token = tokenData?.value
    if(!token){
        return new Response(formatResponse(false, [], 'You need to sign in first'))
    }
    const userData:any = verifyAccessToken(token)
    if(!userData){
        return new Response(formatResponse(false, [], 'Invalid Authorization Token!'))
    }
    const user:any = await User.findById(userData.userId)
    const userInfo = {
        id: user._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        isVerified: user?.isVerified,
        kycStatus: user?.kycStatus,
        agreedTerms: user?.agreedTerms,
    }  

    try{
        return new Response(formatResponse(true, {user: userInfo}, 'User found'))
    }catch(err){
        return new Response(formatResponse(false, [], err.message))
    }


}