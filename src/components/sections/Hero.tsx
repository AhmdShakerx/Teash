import { motion } from "motion/react";
import { Sparkles, CalendarDays, ArrowLeft, ArrowRight, Video, Target, BookOpen } from "lucide-react";

interface HeroProps {
  onScrollToBooking: () => void;
}

export default function Hero({ onScrollToBooking }: HeroProps) {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-radial from-slate-900 via-primary-950/20 to-slate-950">
      {/* Premium Backdrop Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary-600/15 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-primary-500/10 rounded-full blur-3xl -z-10 animate-pulse duration-[10000ms]" />

      {/* Floating Animated Structural Grid Shapes (Stripe/Linear style) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 -z-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Side: Educational Illustration & Floating Badges (First on Mobile, but visually right on Desktop) */}
          <div className="lg:col-span-6 lg:order-2 flex justify-center relative">
            
            {/* Animated Floating shapes */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 2, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[450px]"
            >
              {/* Outer frame matching Apple glassmorphism */}
              <div className="relative p-3 bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 shadow-2xl shadow-black/80 rounded-3xl overflow-hidden aspect-square flex items-center justify-center">
                <img
                  src="/ss.jpeg"
                  alt="منصة التعليم والتميز"
                  className="w-full h-full object-cover rounded-2xl select-none opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>

            {/* Premium Interactive Floating Badge 1 - Interactive Class (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute bottom-8 -left-4 md:-left-8 z-20 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-slate-800/80 shadow-black/50 flex-row-reverse"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-950/50 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
                <Video className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-medium">نظام حديث</span>
                <span className="text-sm font-bold text-white block">حصص تفاعلية</span>
              </div>
            </motion.div>

            {/* Premium Interactive Floating Badge 2 - Live Support (Top Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute -top-4 -right-4 z-20 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-slate-800/80 shadow-black/50 flex-row-reverse"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-950/50 border border-primary-800/60 flex items-center justify-center text-primary-400 animate-pulse">
                <Target className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-medium">هدفنا الأساسي</span>
                <span className="text-sm font-bold text-white block">الدرجة النهائية ★</span>
              </div>
            </motion.div>

            {/* Premium Interactive Floating Badge 3 - Flexible Schedules (Center Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="absolute top-1/3 -left-6 md:-left-12 z-20 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-2xl shadow-2xl border border-slate-800/80 shadow-black/50 flex-row-reverse"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-950/50 border border-violet-800/60 flex items-center justify-center text-violet-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400 block font-medium">متابعة دقيقة</span>
                <span className="text-sm font-bold text-white block">شرح تفصيلي</span>
              </div>
            </motion.div>

            {/* Background Decorative Rings */}
            <div className="absolute inset-0 w-full h-full -z-10 flex items-center justify-center">
              <div className="w-[110%] h-[110%] border border-slate-800/40 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: "25s" }} />
              <div className="w-[125%] h-[125%] border border-dashed border-slate-800/20 rounded-full animate-spin-slow pointer-events-none" style={{ animationDuration: "50s" }} />
            </div>

          </div>

          {/* Left Side: Content (Second on Mobile, First on Desktop) */}
          <div className="lg:col-span-6 lg:order-1 text-center lg:text-right">
            
            {/* Soft Sparkle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-950/50 border border-primary-800/50 px-4 py-1.5 rounded-full text-primary-300 font-semibold text-xs md:text-sm mb-6 flex-row-reverse"
            >
              <Sparkles className="w-4 h-4 text-primary-400 animate-spin-slow" />
              <span>متاح الآن التسجيل لمادة البرمجة للعام الدراسي الجديد ٢٠٢٦ / ٢٠٢٧</span>
            </motion.div>

            {/* Big Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight md:leading-snug mb-6"
            >
              احجز مكانك <span className="text-primary-400 relative inline-block">الآن
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-primary-600 fill-current" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,10 100,5" stroke="currentColor" strokeWidth="5" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            >
              احجز حصتك بسهولة خلال أقل من دقيقة. انضم إلى مئات الطلاب المتفوقين وابدأ رحلتك المتميزة مع الأستاذ أحمد شاكر لتأسيس واحتراف مادة البرمجة للصفين الأول والثاني الثانوي.
            </motion.p>

            {/* CTA and Stats Shortcut buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onScrollToBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-primary-600 text-white font-bold text-base hover:bg-primary-500 shadow-xl shadow-primary-600/30 hover:shadow-primary-600/50 hover:-translate-y-1 active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>احجز الآن</span>
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("teacher");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 text-slate-300 font-bold text-base hover:bg-slate-850 border border-slate-800 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>تعرّف على الأستاذ</span>
              </button>
            </motion.div>

            {/* Visual indicators underneath buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-slate-400 text-xs md:text-sm font-medium flex-row-reverse"
            >
              <span className="flex items-center gap-1.5 flex-row-reverse">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>المقاعد محدودة جداً</span>
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-slate-750" />
              <span className="flex items-center gap-1.5 flex-row-reverse">
                <CalendarDays className="w-4 h-4 text-primary-400" />
                <span>تأكيد الحجز فوري</span>
              </span>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
