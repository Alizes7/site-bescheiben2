import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "Nome da empresa é obrigatório"),
  phone: z.string().optional(),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
  service: z.string().optional(),
});

export const diagnosticoSchema = z.object({
  name: z.string().min(2, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  company: z.string().min(2, "Empresa é obrigatória"),
  role: z.string().min(2, "Cargo é obrigatório"),
  phone: z.string().min(10, "Telefone é obrigatório"),
  segment: z.string().min(1, "Selecione um segmento"),
  challenge: z.string().min(20, "Descreva seu principal desafio (mín. 20 caracteres)"),
  revenue: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type DiagnosticoFormData = z.infer<typeof diagnosticoSchema>;
