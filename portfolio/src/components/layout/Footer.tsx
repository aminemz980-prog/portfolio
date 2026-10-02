import { profile } from "@/data/profile";
export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-5 text-sm text-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js, TypeScript and Tailwind CSS.</p>
      </div>
    </footer>
  );
}
