import { EmailTemplate } from '../../_component/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {

  const userData = await req.json();

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [userData.email],
      subject: "Congratulations!, You will Inscha'Allah got what you want.",
      react: EmailTemplate({ userData }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}