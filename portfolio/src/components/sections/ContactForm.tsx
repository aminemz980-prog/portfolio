"use client";
import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { contactSchema } from "@/lib/validation";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "success" } | { kind: "error"; message: string };
const field = "w-full rounded-lg border border-line bg-bg px-4 py-3 text-ink placeholder:text-muted/70 focus:border-accent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setStatus({ kind: "error", message: parsed.error.issues[0]?.message ?? "Check the form and try again." });
      return;
    }
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(body.error ?? "The message could not be sent.");
      form.reset();
      setStatus({ kind: "success" });
    } catch (err) {
      setStatus({ kind: "error", message: err instanceof Error ? err.message : "The message could not be sent." });
    }
  }

  const sending = status.kind === "sending";
  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-describedby="form-status">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
        <input id="name" name="name" autoComplete="name" required className={field} disabled={sending} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required className={field} disabled={sending} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
        <textarea id="message" name="message" rows={6} required className={field} disabled={sending} />
      </div>
      {/* Honeypot: hidden from people and assistive tech, bots fill it in */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90 disabled:opacity-60">
        {sending && <Loader2 size={16} className="animate-spin" aria-hidden />}
        {sending ? "Sending…" : "Send message"}
      </button>
      <div id="form-status" role="status" aria-live="polite" className="min-h-6 text-sm">
        {status.kind === "success" && <p className="flex items-center gap-2 text-pass"><CheckCircle2 size={16} aria-hidden /> Message sent. I will reply by email.</p>}
        {status.kind === "error" && <p className="flex items-center gap-2 text-red-600 dark:text-red-400"><AlertCircle size={16} aria-hidden /> {status.message}</p>}
      </div>
    </form>
  );
}
