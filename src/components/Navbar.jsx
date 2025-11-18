import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-white font-semibold">GlassCard</a>
        <div className="hidden sm:flex items-center gap-6 text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#" className="rounded-lg bg-white/10 border border-white/10 px-4 py-2 hover:bg-white/20 transition-colors text-white">Apply</a>
        </div>
        <button className="sm:hidden text-slate-200" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
