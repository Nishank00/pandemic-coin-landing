import { cookies } from "next/headers";
import User from "../../../lib/models/User";
import { formatResponse, verifyAccessToken } from "../../components/utils/helper";

export async function GET(req: Request){
    cookies().delete('access-token')
    
    return new Response(formatResponse(true, [], 'Logout Successful'))


}