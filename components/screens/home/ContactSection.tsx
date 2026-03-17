"use client";
import { motion } from 'framer-motion';
import { SendIcon, UserIcon, MailIcon, MessageSquareIcon } from 'lucide-react';
export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.');
  };
  return (
    <section
      id="contact"
      className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Decorative Wave at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[40px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="#020617">
          </path>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 mt-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-5/12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Floating SVG Shapes */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] bg-[length:20px_20px]" />

              <motion.svg
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity
                }}
                className="absolute top-10 right-10 w-16 h-16 opacity-20"
                viewBox="0 0 100 100">
                
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4" />
                
              </motion.svg>

              <motion.svg
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -15, 0]
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity
                }}
                className="absolute bottom-20 left-10 w-24 h-24 opacity-20"
                viewBox="0 0 100 100">
                
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                  rx="10" />
                
              </motion.svg>

              <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />
            </div>

            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              className="relative z-10">
              
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                تواصل معنا
              </h2>
              <p className="text-blue-100 text-xl mb-8 leading-relaxed font-light">
                إذا كنت تبحث عن شريك تقني يساعدك على تطوير مؤسستك، أو ترغب في
                الاستفادة من أحدث التقنيات في مجالات الذكاء الاصطناعي والابتكار،
                فنحن هنا لدعمك.
              </p>
              <div className="h-px w-16 bg-white/30 mb-8" />
              <p className="text-white font-bold text-2xl mb-4">
                ابدأ رحلتك نحو مستقبل أكثر ذكاءً اليوم.
              </p>
              <p className="text-blue-100 text-lg">
                فريقنا جاهز للإجابة عن استفساراتك وتقديم الاستشارات التي تساعدك
                على اتخاذ الخطوة التالية بثقة.
              </p>
            </motion.div>

            {/* Contact Image */}
            <div className="relative z-10 mt-8">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                  alt="مكتب حديث لفريق العمل"
                  className="w-full h-48 object-cover opacity-80"
                  loading="lazy" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-700/60 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-7/12 p-12 md:p-16 bg-white">
            <motion.form
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              onSubmit={handleSubmit}
              className="space-y-8">
              
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  
                  <UserIcon className="w-4 h-4 text-blue-500" />
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all bg-slate-50 hover:bg-white text-lg"
                  placeholder="أدخل اسمك الكامل" />
                
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  
                  <MailIcon className="w-4 h-4 text-purple-500" />
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 outline-none transition-all bg-slate-50 hover:bg-white text-lg text-left"
                  placeholder="name@example.com"
                  dir="ltr" />
                
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  
                  <MessageSquareIcon className="w-4 h-4 text-cyan-500" />
                  الرسالة
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-cyan-500/20 focus:border-cyan-500 outline-none transition-all bg-slate-50 hover:bg-white resize-none text-lg"
                  placeholder="كيف يمكننا مساعدتك؟">
                </textarea>
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group">
                
                تواصل معنا الآن
                <SendIcon className="w-6 h-6 rotate-180 group-hover:-translate-x-1 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>);

}