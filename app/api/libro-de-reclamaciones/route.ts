import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      reclamationType,
      fullName,
      documentType,
      documentNumber,
      email,
      phone,
      address,
      isMinor,
      guardianName,
      serviceType,
      amountClaimed,
      serviceDescription,
      detail,
      consumerRequest,
    } = body;

    if (!fullName || !documentNumber || !email || !detail || !consumerRequest) {
      return NextResponse.json(
        { error: "Por favor complete todos los campos obligatorios del formulario." },
        { status: 400 }
      );
    }

    // Generate unique claim code
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const claimCode = `FA-${reclamationType === "queja" ? "QUE" : "REC"}-${year}-${randomSuffix}`;
    const formattedDate = dateNow.toLocaleString("es-PE", {
      timeZone: "America/Lima",
      dateStyle: "full",
      timeStyle: "short",
    });

    const isQueja = reclamationType === "queja";
    const titleText = isQueja ? "QUEJA" : "RECLAMO";

    // Attempt to send notification email via Resend
    try {
      if (process.env.RESEND_API_KEY) {
        await resend.emails.send({
          from: "Fundo Achamaqui Legal <onboarding@resend.dev>",
          to: "fundoachamaqui@gmail.com",
          replyTo: email,
          subject: `[${claimCode}] Hoja de Reclamación - ${titleText} de ${fullName}`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 650px; border: 1px solid #ddd; padding: 25px; border-radius: 8px;">
              <div style="border-bottom: 2px solid #415f44; padding-bottom: 12px; margin-bottom: 20px;">
                <h2 style="color: #415f44; margin: 0;">HOTEL FUNDO ACHAMAQUI S.A.C.</h2>
                <p style="margin: 4px 0 0 0; color: #666; font-size: 13px;">RUC: 20608407716 | Km. 39 Carretera Pedro Ruiz, Chachapoyas, Amazonas</p>
                <h3 style="color: #c9a96e; margin: 12px 0 0 0;">HOJA DE RECLAMACIÓN VIRTUAL N° ${claimCode}</h3>
                <p style="margin: 2px 0 0 0; font-size: 12px; color: #888;">Fecha y Hora: ${formattedDate}</p>
              </div>

              <h4 style="background: #f4f7f4; padding: 8px 12px; border-left: 4px solid #415f44; margin-bottom: 10px;">1. IDENTIFICACIÓN DEL CONSUMIDOR</h4>
              <p><strong>Nombres y Apellidos:</strong> ${fullName}</p>
              <p><strong>Documento:</strong> ${documentType} N° ${documentNumber}</p>
              <p><strong>Teléfono:</strong> ${phone || "No especificado"}</p>
              <p><strong>Correo Electrónico:</strong> ${email}</p>
              <p><strong>Domicilio:</strong> ${address || "No especificado"}</p>
              ${isMinor ? `<p><strong>Menor de edad - Apoderado:</strong> ${guardianName}</p>` : ""}

              <h4 style="background: #f4f7f4; padding: 8px 12px; border-left: 4px solid #415f44; margin-bottom: 10px;">2. IDENTIFICACIÓN DEL BIEN CONTRATADO</h4>
              <p><strong>Tipo:</strong> ${serviceType || "Servicio de Hospedaje"}</p>
              <p><strong>Monto Reclamado:</strong> ${amountClaimed ? amountClaimed : "No aplica"}</p>
              <p><strong>Descripción:</strong> ${serviceDescription || "Estadía / Servicio en Fundo Achamaqui"}</p>

              <h4 style="background: #f4f7f4; padding: 8px 12px; border-left: 4px solid #415f44; margin-bottom: 10px;">3. DETALLE DE LA RECLAMACIÓN (${titleText})</h4>
              <p><strong>Tipo:</strong> ${titleText}</p>
              <p><strong>Detalle de los hechos:</strong></p>
              <div style="background: #fafafa; padding: 12px; border-radius: 4px; border: 1px solid #eee; white-space: pre-wrap;">${detail}</div>
              
              <p><strong>Pedido concreto del consumidor:</strong></p>
              <div style="background: #fafafa; padding: 12px; border-radius: 4px; border: 1px solid #eee; white-space: pre-wrap;">${consumerRequest}</div>

              <p style="font-size: 11px; color: #777; margin-top: 24px; border-top: 1px solid #eee; padding-top: 10px;">
                Conforme a la Ley N° 29571 y modificatorias, el proveedor deberá dar respuesta a este reclamo o queja en un plazo no mayor a quince (15) días hábiles.
              </p>
            </div>
          `,
        });

        // Also send confirmation copy to the consumer
        await resend.emails.send({
          from: "Fundo Achamaqui Legal <onboarding@resend.dev>",
          to: email,
          subject: `Constancia de Registro: ${titleText} N° ${claimCode} - Hotel Fundo Achamaqui`,
          html: `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 650px; border: 1px solid #ddd; padding: 25px; border-radius: 8px;">
              <h2 style="color: #415f44;">Constancia de Registro en el Libro de Reclamaciones</h2>
              <p>Estimado(a) <strong>${fullName}</strong>,</p>
              <p>Hemos registrado correctamente su <strong>${titleText.toLowerCase()}</strong> en nuestro Libro de Reclamaciones Virtual.</p>
              <div style="background: #fbfaf8; border: 1px solid #c9a96e; padding: 15px 20px; border-radius: 6px; margin: 20px 0;">
                <p style="margin: 0; font-size: 16px;"><strong>Código de Registro:</strong> <span style="color: #415f44; font-weight: bold;">${claimCode}</span></p>
                <p style="margin: 4px 0 0 0; font-size: 13px; color: #666;">Fecha: ${formattedDate}</p>
              </div>
              <p>Conforme a la legislación peruana (Ley N° 29571), nuestro equipo atenderá su solicitud en un plazo máximo no mayor a <strong>quince (15) días hábiles</strong> a través de este correo electrónico.</p>
              <p>Agradecemos su comunicación, la cual nos ayuda a mantener y elevar la calidad de nuestros servicios.</p>
              <br/>
              <p>Atentamente,<br/><strong>Fundo Achamaqui S.A.C.</strong><br/>Km. 39 Carretera Pedro Ruiz, Chachapoyas, Amazonas<br/>info@fundoachamaqui.com | +51 954 754 650</p>
            </div>
          `,
        });
      }
    } catch (emailErr) {
      console.warn("Could not send email notification for complaint (continuing):", emailErr);
    }

    return NextResponse.json({
      success: true,
      claimCode,
      formattedDate,
      message: "Su reclamo/queja ha sido registrado exitosamente.",
    });
  } catch (error: any) {
    console.error("Error processing Libro de Reclamaciones:", error);
    return NextResponse.json(
      { error: error.message || "Error al procesar la reclamación" },
      { status: 500 }
    );
  }
}
