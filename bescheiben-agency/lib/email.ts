// Email service - uses Resend when API key is available
// Falls back to console.log in development

interface ContactEmailData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  service?: string;
}

interface DiagnosticoEmailData {
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  segment: string;
  challenge: string;
  revenue?: string;
}

export async function sendContactEmail(data: ContactEmailData): Promise<boolean> {
  try {
    if (!process.env.RESEND_API_KEY) {
      // Development fallback
      console.log("[Contact Form Submission]", data);
      return true;
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL || "bescheiben@gmail.com",
      subject: `[Contato] ${data.name} — ${data.company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E88E5;">Novo contato pelo site</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Nome:</td><td>${data.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td>${data.email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Empresa:</td><td>${data.company}</td></tr>
            ${data.phone ? `<tr><td style="padding: 8px; font-weight: bold;">Telefone:</td><td>${data.phone}</td></tr>` : ""}
            ${data.service ? `<tr><td style="padding: 8px; font-weight: bold;">Serviço:</td><td>${data.service}</td></tr>` : ""}
          </table>
          <h3>Mensagem:</h3>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 8px;">${data.message}</p>
        </div>
      `,
    });

    return true;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
}

export async function sendDiagnosticoEmail(data: DiagnosticoEmailData): Promise<boolean> {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.log("[Diagnóstico Submission]", data);
      return true;
    }

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL || "bescheiben@gmail.com",
      subject: `[Diagnóstico] ${data.name} — ${data.company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E67E22;">Novo Diagnóstico Gratuito Solicitado</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold;">Nome:</td><td>${data.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td>${data.email}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Empresa:</td><td>${data.company}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Cargo:</td><td>${data.role}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Telefone:</td><td>${data.phone}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Segmento:</td><td>${data.segment}</td></tr>
            ${data.revenue ? `<tr><td style="padding: 8px; font-weight: bold;">Faturamento:</td><td>${data.revenue}</td></tr>` : ""}
          </table>
          <h3>Principal Desafio:</h3>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 8px;">${data.challenge}</p>
        </div>
      `,
    });

    // Auto-reply to prospect
    await resend.emails.send({
      from: process.env.RESEND_FROM || "onboarding@resend.dev",
      to: data.email,
      subject: "Recebemos seu Diagnóstico — Bescheiben Digital Agency",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E88E5;">Olá, ${data.name}!</h2>
          <p>Recebemos sua solicitação de diagnóstico gratuito e nossa equipe irá analisá-la com cuidado.</p>
          <p>Em até <strong>24 horas úteis</strong>, entraremos em contato para agendar sua sessão estratégica.</p>
          <p style="color: #666;">Enquanto isso, fique à vontade para explorar nosso blog com insights sobre marketing B2B.</p>
          <br/>
          <p><strong>Equipe Bescheiben Digital Agency</strong></p>
        </div>
      `,
    });

    return true;
  } catch (error) {
    console.error("Diagnóstico email error:", error);
    return false;
  }
}
