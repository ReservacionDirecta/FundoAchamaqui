import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import prisma from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Por favor, introduce un correo electrónico válido." },
        { status: 400 }
      );
    }

    // 1. Check if subscriber already exists in database
    const existing = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Este correo electrónico ya está registrado." },
        { status: 400 }
      );
    }

    // 2. Save subscriber in database
    await prisma.subscriber.create({
      data: { email },
    });

    // 3. Send email via Resend
    const { data, error } = await resend.emails.send({
      from: "Fundo Achamaqui <onboarding@resend.dev>",
      to: email,
      subject: "¡Te has suscrito al boletín de Fundo Achamaqui!",
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
          <div style="background-color: #8c7355; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 300; letter-spacing: 1px;">FUNDO ACHAMAQUI</h1>
          </div>
          <div style="padding: 40px 30px; background-color: #ffffff; color: #333333; line-height: 1.6;">
            <h2 style="color: #8c7355; font-weight: 400; margin-top: 0;">¡Gracias por suscribirte!</h2>
            <p>Nos alegra mucho tenerte en nuestra comunidad. A partir de ahora, serás el primero en enterarte de nuestras ofertas exclusivas, eventos especiales y novedades sobre el hotel.</p>
            <p>Pronto recibirás nuestras novedades directo en tu bandeja de entrada.</p>
            <div style="margin: 30px 0; text-align: center;">
              <a href="https://fundoachamaqui.com" style="background-color: #8c7355; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 25px; font-weight: bold; display: inline-block;">Visitar Sitio Web</a>
            </div>
            <p style="font-size: 13px; color: #777777; border-top: 1px solid #eeeeee; padding-top: 20px; margin-top: 30px;">
              Si no solicitaste esta suscripción, puedes ignorar este correo.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend send error:", error);
      // We still return success: true because the subscriber was successfully saved in DB
      return NextResponse.json({ success: true, warning: "Subscribed but confirmation email failed" });
    }

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error("Subscription API error:", error);
    return NextResponse.json(
      { error: error.message || "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
}
