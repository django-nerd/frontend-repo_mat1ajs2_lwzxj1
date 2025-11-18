import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop",
    alt: "Card on marble",
  },
  {
    src: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1200&auto=format&fit=crop",
    alt: "App dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1640920789307-1df7543f5828?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBcHAlMjBkYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzUwNzE5M3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
    alt: "Tap to pay",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 sm:py-28 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">A product that feels premium</h2>
          <p className="mt-3 text-slate-300">Minimal design. Glassmorphic finish. Built to turn heads.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
