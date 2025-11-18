import { Instagram, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="text-white font-semibold">GlassCard</div>
            <div className="text-slate-400 text-sm">© {new Date().getFullYear()} GlassCard Inc. All rights reserved.</div>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <div className="flex items-center gap-3 text-slate-300">
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram className="w-5 h-5"/></a>
            <a href="#" aria-label="Email" className="hover:text-white transition-colors"><Mail className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
