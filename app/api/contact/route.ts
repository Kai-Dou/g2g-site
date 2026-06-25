import { NextResponse } from "next/server";

// TODO: integrar com WhatsApp/CRM depois

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { phone?: string };
    const phone = body.phone?.trim() ?? "";

    if (phone && !/^[\d\s()+-]{8,20}$/.test(phone)) {
      return NextResponse.json(
        { error: "Informe um telefone válido." },
        { status: 400 },
      );
    }

    // Simula persistência — substituir por integração real
    console.log("[G2G Contact]", { phone: phone || "(não informado)", at: new Date().toISOString() });

    return NextResponse.json({
      success: true,
      message: phone
        ? "Recebemos seu contato! Nossa equipe entrará em contato em breve."
        : "Obrigado pelo interesse! Siga @g2glogistics_llc no Instagram para falar conosco.",
    });
  } catch {
    return NextResponse.json(
      { error: "Erro ao processar solicitação." },
      { status: 500 },
    );
  }
}
