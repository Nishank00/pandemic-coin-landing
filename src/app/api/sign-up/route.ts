import User from "../../../lib/models/User";
import { transporter } from "../../../utils/mailHelper";
import { formatResponse, generatePassword, generateRandomCode } from "../../components/utils/helper";
export async function POST(req: Request){
    const data:any = await req.json();
    let IsUserExist = await User.findOne({email: data?.email});
    if(IsUserExist){
        return new Response(formatResponse(false, [], "User already exist!"))
    }
    const user = new User();
    user.firstName = data?.firstName;
    user.lastName = data?.lastName;
    user.email = data?.email;
    user.password = generatePassword(data?.password);
    user.verificationCode = generateRandomCode();
    const mailOptions = {
        from: process.env.SES_EMAIL,
        to: data?.email,
        subject: "Verify your email address",
        html: `
    <table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
    <tr>
      <td align="center" bgcolor="#F2F2F2" style="padding: 40px 0 30px 0;">
        <h1 style="color: #C02B18; font-size: 24px; margin: 0;">Your Verification Code</h1>
      </td>
    </tr>
    <tr>
      <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
        <p style="font-size: 16px; line-height: 1.5em; margin: 0;">Hi,</p>
        <p style="font-size: 16px; line-height: 1.5em; margin: 0;">Thank you for signing up for our service. To verify your email address, please use the following verification code:</p>
        <h2 style="font-size: 32px; font-weight: bold; margin: 0; text-align: center;">${user.verificationCode}</h2><br />
        <p style="font-size: 16px; line-height: 1.5em; margin: 0;">Please copy and paste the above code into the verification field on our website to confirm your email address.</p>
      </td>
    </tr>
    <tr>
      <td bgcolor="#F2F2F2" style="padding: 30px 30px 30px 30px;">
        <p style="color: #C02B18; font-size: 16px; line-height: 1.5em; margin: 0;">If you have any questions or concerns, please contact us at contact@pandemiccoin.io</p>
      </td>
    </tr>
  </table>
  `,
    };
    try{
        await user.save();
        transporter.sendMail(mailOptions)
        return new Response(formatResponse(true, {}, 'User Created Successfully'));
    }catch(err){
        return new Response(formatResponse(false, [], err?.message || 'Something went wrong!'));
    }
}