import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/70 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-32 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-md text-xs text-slate-300 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            New: Instant card issuance
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white leading-tight">
            The smarter way to pay and get rewarded
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-300 max-w-2xl">
            Meet GlassCard — a minimalist, 3D-designed card that brings premium perks, instant approvals, and zero annual fees. Built for today, not yesterday.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pricing" className="group inline-flex items-center justify-center rounded-lg bg-emerald-500 text-white px-5 py-3 text-sm font-medium shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors">
              Get GlassCard
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/90 px-5 py-3 text-sm font-medium hover:bg-white/10 transition-colors">
              See how it works
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
