import Hero from "./components/Hero";
import Features from "./components/Features";
import SocialProof from "./components/SocialProof";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <SocialProof />
      <Gallery />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
