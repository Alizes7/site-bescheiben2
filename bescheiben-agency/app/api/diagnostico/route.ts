import { NextRequest, NextResponse } from "next/server";
import { diagnosticoSchema } from "@/lib/schemas";
import { sendDiagnosticoEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const result = diagnosticoSchema.safeParse(body);

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

    const sent = await sendDiagnosticoEmail(result.data);

    if (!sent) {
      return NextResponse.json(
        { success: false, error: "Falha ao enviar. Tente novamente." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Diagnóstico solicitado! Entraremos em contato em 24h.",
    });
  } catch (error) {
    console.error("Diagnóstico route error:", error);
    return NextResponse.json(
      { success: false, error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
