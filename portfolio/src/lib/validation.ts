import { z } from "zod";
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name (2 characters minimum).").max(80),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  message: z.string().trim().min(10, "Write at least 10 characters.").max(4000, "Keep the message under 4000 characters."),
  website: z.string().max(0).optional(), // honeypot: must stay empty
});
export type ContactInput = z.infer<typeof contactSchema>;
