import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const perks = [
  "Up to 4% back on rotating categories",
  "Zero annual fee, no hidden charges",
  "Instant virtual card on approval",
  "Advanced security with dynamic CVV",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-gradient-to-b from-slate-950 to-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Simple, fair pricing</h2>
          <p className="mt-3 text-slate-300">No annual fee. Transparent rates. Premium rewards.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
        >
          <div className="flex items-baseline justify-between">
            <div>
              <div className="text-sm text-slate-300">APR</div>
              <div className="mt-1 text-3xl font-semibold text-white">14.99% – 22.99% variable</div>
            </div>
            <div className="text-emerald-400 font-medium">No annual fee</div>
          </div>

          <ul className="mt-6 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-200">
                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <a href="#" className="group mt-8 inline-flex w-full items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition-colors">
            Apply now
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
