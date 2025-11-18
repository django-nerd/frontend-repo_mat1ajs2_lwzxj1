import { CheckCircle2, Shield, Gift, Zap, Smartphone, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: CheckCircle2,
    title: "Instant approvals",
    desc: "Apply in minutes. Start using your card the moment you're approved.",
  },
  { icon: Gift, title: "Premium rewards", desc: "Earn up to 4% back on everyday categories that rotate monthly." },
  { icon: Shield, title: "Next‑gen security", desc: "Numberless design, dynamic CVV, and real-time spend alerts." },
  { icon: Zap, title: "Zero annual fee", desc: "Transparent pricing, no hidden charges, ever." },
  { icon: Smartphone, title: "App-first control", desc: "Freeze/unfreeze, set limits, and manage subscriptions with a tap." },
  { icon: Globe, title: "Worldwide acceptance", desc: "Tap-to-pay and fee-free international purchases." },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.09),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.08),transparent_35%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Why GlassCard?</h2>
          <p className="mt-3 text-slate-300">Built for a faster, safer, more rewarding way to pay.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition-colors"
            >
              <f.icon className="w-6 h-6 text-emerald-400" />
              <h3 className="mt-3 text-white font-medium">{f.title}</h3>
              <p className="mt-1.5 text-sm text-slate-300/90">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
