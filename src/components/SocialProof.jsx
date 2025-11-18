import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ava Chen",
    role: "Product Designer",
    quote:
      "Switched from my old bank card and never looked back. The perks + app control are chef's kiss.",
  },
  {
    name: "Marcus Lee",
    role: "Freelance Developer",
    quote:
      "Instant approval and I used it the same day. Love the dynamic CVV and clean, numberless design.",
  },
  {
    name: "Sophia Gomez",
    role: "Founder, Noon Studio",
    quote:
      "Rewards feel tailored to me. The whole experience feels modern and delightful.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section className="py-20 sm:py-24 bg-slate-950/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold text-white tracking-tight">Loved by modern spenders</h2>
            <p className="mt-2 text-slate-300">Thousands of five-star reviews and counting.</p>
          </div>
          <Stars />
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <Stars />
              <p className="mt-3 text-slate-200">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-400">{t.name} · {t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
