import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { User, Phone, GraduationCap, Calendar, FileText, CheckCircle, Send, ArrowRight, MessageSquare, Loader2 } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    stage: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stages = [
    { id: "1st", name: "الصف الأول الثانوي" },
    { id: "2nd", name: "الصف الثاني الثانوي" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "الرجاء إدخال الاسم الكامل ثنائياً على الأقل.";
    } else if (formData.fullName.trim().split(" ").length < 2) {
      newErrors.fullName = "يرجى إدخال اسم ثنائي على الأقل لتسهيل الحفظ.";
    }

    const phoneRegex = /^(010|011|012|015|015)\d{8}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "الرجاء إدخال رقم الهاتف للتواصل.";
    } else if (!phoneRegex.test(formData.phoneNumber.replace(/\s+/g, ""))) {
      newErrors.phoneNumber = "يرجى إدخال رقم هاتف مصري صحيح مكون من 11 رقماً (مثال: 01012345678).";
    }

    if (!formData.stage) {
      newErrors.stage = "الرجاء اختيار المرحلة الدراسية.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors as user typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validate()) return;

  setIsSubmitting(true);

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbyflDNCpeVk7GaHfBDbzHACIWokdqXA_3zWeWpJP5jDljP6DrMTwFYiyhlTPR6gYB3fJA/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          Name: formData.fullName,
          Phone: formData.phoneNumber,
          Grade: formData.stage,
        }),
      }
    );

    setIsSubmitting(false);
    setIsSubmitted(true);
  } catch (error) {
    console.error(error);
    setIsSubmitting(false);
    alert("حدث خطأ أثناء إرسال البيانات.");
  }
};

  const handleReset = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      stage: "",
    });
    setIsSubmitted(false);
  };

  // Pre-fill a whatsapp message with details
  const whatsappUrl = `https://wa.me/201006734678?text=${encodeURIComponent(
    `السلام عليكم يا أستاذ أحمد، لقد قمت بالتسجيل في المنصة الإلكترونية لحجز حصة دراسية لتعلم البرمجة. هذه بياناتي:\n\n👤 الاسم: ${formData.fullName}\n📞 رقم الهاتف: ${formData.phoneNumber}\n🎓 المرحلة: ${formData.stage}\n\nأرجو تأكيد حجز المقعد الخاص بي وشكراً جزيلاً.`
  )}`;

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-[#090d16] to-[#030712]">
      {/* Decorative Blur Background Gimmick */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-primary-500/5 rounded-full blur-3xl -z-10 animate-pulse duration-[12000ms]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 bg-primary-950/50 border border-primary-800/50 text-primary-300 px-4 py-1.5 rounded-full text-xs font-bold mb-4 flex-row-reverse"
          >
            <Calendar className="w-4 h-4 text-primary-400" />
            <span>التسجيل الإلكتروني المباشر</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">نموذج حجز المقعد الدراسي</h2>
          <p className="text-slate-400 font-medium text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            املأ بياناتك في النموذج أدناه بدقة لتأمين مقعدك الدراسي في المجموعات الجديدة. تستغرق العملية أقل من دقيقة واحدة.
          </p>
        </div>

        {/* Master Glassmorphic Container Form */}
        <motion.div
          layout
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/80 relative"
        >
          {/* Subtle design element */}
          <div className="absolute top-0 left-12 w-24 h-1 bg-gradient-to-r from-primary-500 to-indigo-600 rounded-b-full" />

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6 text-right"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="fullName" className="block text-sm font-bold text-slate-300 flex items-center justify-start flex-row-reverse gap-1.5">
                      <User className="w-4.5 h-4.5 text-slate-500" />
                      <span>الاسم الكامل للطالب <span className="text-rose-500">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="أدخل اسمك ثنائياً أو ثلاثياً..."
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full text-right px-4 py-3.5 rounded-xl border bg-slate-950/50 focus:bg-slate-950/90 text-white placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.fullName
                            ? "border-rose-500/50 focus:ring-rose-500/20"
                            : "border-slate-800 focus:border-primary-500 focus:ring-primary-950/45"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-semibold text-rose-400 mt-1"
                      >
                        {errors.fullName}
                      </motion.p>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-sm font-bold text-slate-300 flex items-center justify-start flex-row-reverse gap-1.5">
                      <Phone className="w-4.5 h-4.5 text-slate-500" />
                      <span>رقم الهاتف (الواتساب) <span className="text-rose-500">*</span></span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="مثال: 01012345678"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        dir="ltr"
                        className={`w-full text-right px-4 py-3.5 rounded-xl border bg-slate-950/50 focus:bg-slate-950/90 text-white placeholder-slate-500 font-medium text-sm focus:outline-none focus:ring-2 transition-all ${
                          errors.phoneNumber
                            ? "border-rose-500/50 focus:ring-rose-500/20"
                            : "border-slate-800 focus:border-primary-500 focus:ring-primary-950/45"
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-semibold text-rose-400 mt-1"
                      >
                        {errors.phoneNumber}
                      </motion.p>
                    )}
                  </div>

                  {/* Educational Stage Select */}
                  <div className="space-y-2">
                    <label htmlFor="stage" className="block text-sm font-bold text-slate-300 flex items-center justify-start flex-row-reverse gap-1.5">
                      <GraduationCap className="w-4.5 h-4.5 text-slate-500" />
                      <span>المرحلة الدراسية <span className="text-rose-500">*</span></span>
                    </label>
                    <div className="relative">
                      <select
                        id="stage"
                        name="stage"
                        value={formData.stage}
                        onChange={handleChange}
                        className={`w-full text-right px-4 py-3.5 rounded-xl border bg-slate-950/50 focus:bg-slate-950/90 text-white font-medium text-sm focus:outline-none focus:ring-2 transition-all appearance-none ${
                          errors.stage
                            ? "border-rose-500/50 focus:ring-rose-500/20"
                            : "border-slate-800 focus:border-primary-500 focus:ring-primary-950/45"
                        }`}
                      >
                        <option value="" disabled className="text-slate-500 bg-slate-950">اختر المرحلة الدراسية للتسجيل...</option>
                        {stages.map((stg) => (
                          <option key={stg.id} value={stg.name} className="text-slate-200 bg-slate-950 font-medium">
                            {stg.name}
                          </option>
                        ))}
                      </select>
                      {/* Custom dropdown arrow for beautiful styling */}
                      <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                    {errors.stage && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-semibold text-rose-400 mt-1"
                      >
                        {errors.stage}
                      </motion.p>
                    )}
                  </div>

                </div>

                {/* Submit button with loading state */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-primary-600 text-white font-bold text-base hover:bg-primary-500 shadow-2xl shadow-primary-600/30 hover:shadow-primary-600/50 active:scale-[0.99] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2.5 disabled:opacity-85 disabled:cursor-not-allowed group relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5.5 h-5.5 animate-spin" />
                        <span>جاري معالجة وتسجيل طلبك...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                        <span>تأكيد الحجز المبدئي</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Safe Privacy notice */}
                <p className="text-center text-xs text-slate-500 font-medium pt-2">
                  🔒 بياناتك آمنة تماماً، لن نستخدمها إلا للتواصل وتنسيق حجز المقعد الخاص بك.
                </p>

              </motion.form>
            ) : (
              // BREATHTAKING SUCCESS CONFIRMATION WINDOW
              <motion.div
                key="booking-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8 px-4"
              >
                {/* Animated Checked Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-20 h-20 rounded-full bg-emerald-950/40 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-inner"
                >
                  <CheckCircle className="w-11 h-11" />
                </motion.div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">تهانينا يا {formData.fullName.split(" ")[0]}! 🎉</h3>
                <h4 className="text-lg font-bold text-emerald-400 mb-6">تم تسجيل طلب الحجز المبدئي بنجاح</h4>

                <p className="text-slate-400 font-medium text-sm sm:text-base max-w-xl mx-auto leading-relaxed mb-8">
                  لقد قمنا بحفظ بيانات حجزك بأمان في نظامنا. سيقوم الفريق الأكاديمي للأستاذ أحمد شاكر بالتواصل معك هاتفياً أو عبر الواتساب خلال أقل من ساعتين لمراجعة التفاصيل وموعد الحصة الأولى وتأكيد تفعيل اشتراكك النهائي.
                </p>

                {/* Booking Receipt Summary Card */}
                <div className="max-w-md mx-auto bg-slate-950/40 border border-slate-800/80 rounded-2xl p-5 mb-8 text-right divide-y divide-slate-800/60 font-semibold text-sm text-slate-300">
                  <div className="py-2.5 flex justify-between flex-row-reverse">
                    <span className="text-slate-500">الاسم المسجل</span>
                    <span className="text-white">{formData.fullName}</span>
                  </div>
                  <div className="py-2.5 flex justify-between flex-row-reverse">
                    <span className="text-slate-500">رقم الهاتف</span>
                    <span className="text-white" dir="ltr">{formData.phoneNumber}</span>
                  </div>
                  <div className="py-2.5 flex justify-between flex-row-reverse">
                    <span className="text-slate-500">المرحلة الدراسية</span>
                    <span className="text-white">{formData.stage}</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-600/15 flex items-center justify-center gap-2 flex-row-reverse"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>تأكيد مباشر عبر الواتساب</span>
                  </a>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-300 font-bold text-sm transition-all border border-slate-800 flex items-center justify-center gap-2 flex-row-reverse cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>تسجيل حجز آخر</span>
                  </button>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
}
