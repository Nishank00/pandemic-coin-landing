import User from "../../../lib/models/User";
import { formatResponse } from "../../components/utils/helper";

export async function POST(req:Request) {
    const { email, event } = await req.json();

    try {
        const user = await User.findOne({ email });

        if (!user) {
           return new Response(formatResponse(false,[],'No User Found!' ))
        }

        switch (event) {
            case 'user.readyToReview':
                user.kycStatus = 'inreview';
                break;
            case 'review.approved':
                user.kycStatus = 'approved';
                break;
            case 'user.inReview':
                user.kycStatus = 'inreview';
                break;
            case 'review.rejected':
            case 'user.blocked':
                user.kycStatus = 'rejected';
                break;
            default:
                return new Response(formatResponse(false, [], 'Invalid Event'));
        }

        user.status = 'KYC_Done';
        await User.updateOne({ email: user.email }, { $set: user });
        return new Response(formatResponse(true, [], 'KYC status updated successfully'));
    } catch (error) {
        console.error('Error updating KYC status:', error);
        return new Response(formatResponse(false, [], 'Unable to update KYC status'));
    }
}
