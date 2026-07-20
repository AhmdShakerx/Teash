import { GraduationCap, Phone, Globe, MessageSquare, ArrowUp } from "lucide-react";

interface FooterProps {
  onScrollTo: (id: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "الرئيسية", id: "hero" },
    { name: "عن الأستاذ", id: "teacher" },
    { name: "احجز الآن", id: "booking" },
  ];

  return (
    <footer className="bg-[#030712] text-slate-400 pt-16 pb-8 border-t border-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start text-right pb-12 border-b border-slate-800/80">
          
          {/* Logo & branding */}
          <div className="col-span-1 md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5 justify-start flex-row-reverse">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-md shadow-primary-600/10">
                <GraduationCap className="w-5.5 h-5.5" />
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-none">الأستاذ أحمد شاكر</span>
                <span className="text-xs text-slate-500 font-semibold block mt-1">المنصة التعليمية الأولى لعلوم البرمجة والبرمجة للصفين الأول والثاني الثانوي</span>
              </div>
            </div>
            
            <p className="text-sm font-medium leading-relaxed text-slate-400 max-w-sm">
              مُلتزمون ببناء جيل متميز من الطلاب المتفوقين وتوفير سبل التعليم التفاعلي والذكي للوصول لقمم الدرجات الأكاديمية دائماً في امتحانات الثانوية العامة والشهادات المختلفة.
            </p>
          </div>

          {/* Quick links */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase">روابط سريعة</h4>
            <ul className="space-y-2.5 text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onScrollTo(link.id)}
                    className="hover:text-white transition-colors cursor-pointer focus:outline-none"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Handles */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <h4 className="text-sm font-extrabold text-white tracking-wider uppercase">قنوات التواصل المباشرة</h4>
            <p className="text-sm font-medium text-slate-400 leading-relaxed">
              يسعدنا دائماً استقبال استفسارات الطلاب وأولياء الأمور طوال اليوم على مدار الأسبوع عبر القنوات التالية.
            </p>

            <div className="space-y-3 pt-1">
              
              {/* Phone */}
              <a
                href="tel:201006734678"
                className="flex items-center gap-3 justify-start flex-row-reverse group text-sm hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 group-hover:bg-primary-600 group-hover:text-white flex items-center justify-center transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block">الاتصال الهاتفي</span>
                    <span className="font-bold block" dir="ltr">010 0673 4678</span>
                  </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201111980500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 justify-start flex-row-reverse group text-sm hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 group-hover:bg-emerald-600 group-hover:text-white flex items-center justify-center transition-all">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block">راسلنا عبر الواتساب</span>
                  <span className="font-bold block" dir="ltr">01111980500</span>
                </div>
              </a>

              {/* Portfolio Website */}
              <a
                href="https://portfolio-mauve-phi-99.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 justify-start flex-row-reverse group text-sm hover:text-white transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 group-hover:bg-primary-600 group-hover:text-white flex items-center justify-center transition-all">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block">الموقع التعريفي</span>
                  <span className="font-bold block">Portfolio</span>
                </div>
              </a>

            </div>
          </div>

        </div>

        {/* Lower Column: Copyright & Scroll To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right flex-row-reverse">
          
          {/* Scroll to top button */}
          <button
            onClick={handleScrollToTop}
            className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-400 flex items-center justify-center transition-all cursor-pointer shadow-md active:scale-95"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

          {/* Copyright notice */}
          <div className="text-xs sm:text-sm font-semibold">
            <p>© {currentYear} الأستاذ أحمد شاكر للثانوية العامة. جميع الحقوق محفوظة.</p>
            <p className="text-slate-600 mt-1">تم التطوير وتصميم الواجهة بمعايير متميزة وجودة ممتازة.</p>
          </div>

        </div>

      </div>
    </footer>
  );
}
