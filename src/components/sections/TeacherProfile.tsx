import { motion } from "motion/react";
import { Award, GraduationCap, Star, Users, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

export default function TeacherProfile() {
  const credentials = [
    "مُعدّ ومؤلف سلاسل وملازم البرمجة لطلاب الثانوية العامة.",
    "مُحاضر ومطور برمجيات معتمد لتبسيط التكنولوجيا لجيل الغد.",
    "مؤسس منصة أحمد شاكر التعليمية لعلوم البرمجة والذكاء الاصطناعي.",
    "تخريج عشرات الطلاب المتميزين سنوياً في المسابقات البرمجية.",
  ];

  return (
    <section id="teacher" className="py-24 bg-[#030712] relative overflow-hidden">
      {/* Structural backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-950/10 rounded-full blur-3xl -z-10 animate-pulse duration-[12000ms]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-1.5 bg-primary-950/50 border border-primary-800/50 text-primary-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4 flex-row-reverse"
          >
            <Award className="w-4 h-4 text-primary-400" />
            <span>نبذة عن البشمهندس </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            استعد للتميز والتفوق مع المهندس أحمد شاكر
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 font-medium text-base md:text-lg leading-relaxed"
          >
            نتجاوز حدود التعليم التقليدي لنقدّم للطلاب تجربة دراسية ملهمة وتفاعلية تؤهلهم لبلوغ الدرجات النهائية بكل سهولة ويسر.
          </motion.p>
        </div>

        {/* Master Teacher Card Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl shadow-black/60 relative overflow-hidden backdrop-blur-xl"
        >
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Side (Desktop): Teacher Portrait with visual framing */}
            <div className="lg:col-span-5 flex justify-center lg:order-2">
              <div className="relative">
                {/* Floating Ring decorative elements */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary-500 to-blue-500 opacity-20 blur-lg animate-pulse" />
                
                {/* Image Wrap */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-4 border-slate-800 shadow-2xl shadow-black/80 aspect-square">
                  <img
                    src="/p9.jpg"
                    alt="المهندس أحمد شاكر"
                    className="w-full h-full object-cover select-none opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subject Tag overlay on bottom */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-slate-800/80 shadow-2xl text-center flex items-center justify-center gap-1.5 flex-row-reverse">
                    <GraduationCap className="w-5.5 h-5.5 text-primary-400" />
                    <span className="font-bold text-white text-sm">خبير البرمجة وتصميم المواقع </span>
                  </div>
                </div>

                {/* Floating Rating Mini-Card */}
                {/* <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 bg-slate-900 px-3.5 py-2.5 rounded-xl shadow-2xl border border-slate-800/80 flex items-center gap-2 flex-row-reverse z-20 text-white"
                >
                  <div className="flex items-center gap-0.5 text-amber-500">
                    <Star className="w-4.5 h-4.5 fill-current" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white block">4.9 ★</span>
                    <span className="text-[10px] text-slate-400 block font-medium">التقييم العام</span>
                  </div>
                </motion.div> */}

                {/* Floating Student Count Mini-Card */}
                {/* <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 -right-6 bg-slate-900 px-3.5 py-2.5 rounded-xl shadow-2xl border border-slate-800/80 flex items-center gap-2 flex-row-reverse z-20 text-white"
                >
                  <div className="w-9 h-9 rounded-lg bg-primary-950/60 border border-primary-800/50 flex items-center justify-center text-primary-400">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-white block">+1,200 طالب</span>
                    <span className="text-[10px] text-slate-400 block font-medium">مشترك حالياً</span>
                  </div>
                </motion.div> */}
              </div>
            </div>

            {/* Right Side (Desktop): Text Content & Credentials */}
            <div className="lg:col-span-7 text-center lg:text-right lg:order-1">
              
              <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start flex-row-reverse">
                {/* <ShieldCheck className="w-5 h-5 text-primary-400" /> */}
                {/* <span className="text-xs font-bold tracking-wider text-primary-400 uppercase">مُعلّم معتمد ومُسجّل</span> */}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">المهندس أحمد شاكر</h3>
              
              <p className="text-slate-300 font-medium text-[15px] sm:text-base leading-relaxed mb-6">
                مُتخصّص في تبسيط وتسهيل مناهج البرمجة وعلوم الحاسب للمرحلة الثانوية (الصفين الأول والثاني الثانوي) بأساليب عملية وتطبيقية تضمن للطالب الفهم الكامل وكتابة الأكواد بطلاقة واحتراف. نسعى دائمًا لخلق بيئة تعليمية تحفز عقل الطالب وتوسع مداركه بأسلوب سلس وممتع.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-right">
                <div className="bg-slate-950/40 backdrop-blur-xs p-4 rounded-xl border border-slate-800/80 shadow-md flex items-center gap-3 flex-row-reverse">
                  <div className="w-10 h-10 rounded-lg bg-indigo-950/60 text-indigo-400 border border-indigo-900/40 flex items-center justify-center font-bold">١٠+</div>
                  <div>
                    <span className="text-sm font-bold text-white block">سنوات من الخبرة</span>
                    <span className="text-[11px] text-slate-400 block">في التدريس والتعليم</span>
                  </div>
                </div>
                <div className="bg-slate-950/40 backdrop-blur-xs p-4 rounded-xl border border-slate-800/80 shadow-md flex items-center gap-3 flex-row-reverse">
                  <div className="w-10 h-10 rounded-lg bg-pink-950/60 text-pink-400 border border-pink-900/40 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-pink-400 fill-current" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">أسلوب تربوي حديث</span>
                    <span className="text-[11px] text-slate-400 block">يركّز على ذكاء الطالب</span>
                  </div>
                </div>
              </div>

              <h4 className="text-white font-bold text-base mb-4 text-right">أهم الميزات الأكاديمية:</h4>
              <ul className="space-y-3 text-right">
                {credentials.map((cred, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2.5 flex-row-reverse justify-start text-sm text-slate-300 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{cred}</span>
                  </motion.li>
                ))}
              </ul>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
