import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Dados inválidos",
          issues: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const sent = await sendContactEmail(result.data);

    if (!sent) {
      return NextResponse.json(
        { success: false, error: "Falha ao enviar mensagem. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Mensagem recebida! Retornaremos em até 24h.",
    });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
