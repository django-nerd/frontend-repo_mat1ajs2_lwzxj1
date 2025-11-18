import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is there an annual fee?",
    a: "No. GlassCard has no annual fee and no hidden charges.",
  },
  { q: "How fast is approval?", a: "Most applicants receive an instant decision. If approved, your virtual card is available immediately." },
  { q: "What about security?", a: "We use a numberless card design and dynamic CVV that refreshes automatically in the app." },
  { q: "Do you support international?", a: "Yes. Tap-to-pay worldwide with no foreign transaction fees." },
];

function Item({ item, i }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
      <button
        className="w-full flex items-center justify-between text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="text-white font-medium">{item.q}</div>
        <ChevronDown className={`w-4 h-4 text-slate-300 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.p
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-3 text-slate-300"
          >
            {item.a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Frequently asked questions</h2>
          <p className="mt-3 text-slate-300">Everything you need to know before you apply.</p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {faqs.map((item, i) => (
            <Item key={item.q} item={item} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
