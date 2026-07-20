import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Menu, X, PhoneCall } from "lucide-react";

interface HeaderProps {
  onScrollTo: (id: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "الرئيسية", id: "hero" },
    { name: "عن الأستاذ", id: "teacher" },
    { name: "احجز الآن", id: "booking" },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 shadow-lg shadow-black/25 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-row-reverse">
          {/* Logo (RTL friendly, so visual elements flow correctly) */}
          <div 
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-2 cursor-pointer flex-row-reverse select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5.5 h-5.5" />
            </div>
            <div className="text-right">
              <span className="font-bold text-lg text-white tracking-tight block leading-none">Eng Ahmed Shaker</span>
              <span className="text-[11px] text-slate-400 font-medium block mt-1">مُعلم البرمجة لأولى وتانية ثانوي</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 flex-row-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-slate-300 hover:text-primary-400 font-medium text-[15px] transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Header Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick("booking")}
              className="relative px-5 py-2.5 rounded-xl bg-primary-600 text-white font-semibold text-sm hover:bg-primary-500 shadow-lg shadow-primary-600/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden flex items-center gap-2"
            >
              <span>احجز مكانك الآن</span>
              <PhoneCall className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-200 hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 top-[65px] bg-slate-950/80 backdrop-blur-sm z-40"
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed left-0 right-0 top-[65px] bg-slate-950/95 border-b border-slate-800 shadow-2xl z-40 overflow-hidden md:hidden"
            >
              <div className="px-4 py-6 space-y-3 flex flex-col items-stretch text-right">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-right py-3 px-4 rounded-xl text-slate-300 hover:bg-slate-900 hover:text-primary-400 font-semibold transition-all cursor-pointer"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => handleNavClick("booking")}
                    className="w-full py-3.5 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-bold text-center shadow-lg shadow-primary-600/30 active:scale-[0.98] transition-all cursor-pointer block"
                  >
                    احجز الآن
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
