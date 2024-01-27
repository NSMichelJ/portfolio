import { Resend } from "resend";

const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const lastName = formData.get("last_name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    if (!name || !lastName || !email || !subject || !message) {
      return new Response(
        JSON.stringify({
          message:
            "Request data is not valid; name, last_name, email, subject and message is required",
        }),
        { ok: false, status: 400, statusText: "400" }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "NSMichelJ Contact <contact.nsmichelj@resend.dev>",
      to: "nunezsalmeronm@gmail.com",
      reply_to: email,
      subject: `${subject}: ${name} ${lastName}`,
      html: `
      <h1>Tinenes un nuevo mensage de ${name} ${lastName} <${email}></h1>
      <p style="font-size: 16px;">${message}</p>
      `,
    });

    if (error) {
      return new Response(
        JSON.stringify({
          message: error,
        }),
        { ok: false, status: 400, statusText: "400" }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Message sent successfully",
        data,
      }),
      { status: 200, statusText: "200" }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        message: error,
      }),
      { ok: false, status: 505, statusText: "505" }
    );
  }
}

export const prerender = false;
