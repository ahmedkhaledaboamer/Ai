"use client";
import { motion } from 'framer-motion';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SparklesIcon } from
'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';
export function HeroSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/30 blur-[120px]" />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-400/30 blur-[120px]" />
        
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-cyan-400/30 blur-[100px]" />
        

        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-[15%] left-[15%] w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 border border-blue-200/50 backdrop-blur-sm" />
        
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -15, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute bottom-[25%] left-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 border border-purple-200/50 backdrop-blur-sm" />
        
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 45, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute top-[30%] right-[5%] w-10 h-10 bg-gradient-to-br from-amber-400/20 to-orange-400/20 border border-amber-200/50 backdrop-blur-sm rotate-45" />
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 3
          }}
          className="absolute bottom-[15%] right-[20%] w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-400/20 to-teal-400/20 border border-emerald-200/50 backdrop-blur-sm" />
        

        {/* Abstract Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className=" mx-auto p-[5%] relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 ">
          {/* Text Content (Right side in RTL) */}
          <div className={`w-full lg:w-1/2 text-center ${isRTL ? 'lg:text-right' : 'lg:text-left'}`}>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 0.5
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-700 text-sm font-medium mb-8 shadow-sm shadow-blue-100">
              
              <SparklesIcon className="w-4 h-4 text-amber-500" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                نحو مستقبل رقمي أكثر ذكاءً
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.1
              }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight mb-6">
              
              قيادة مستقبل الابتكار <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-transparent bg-clip-text relative inline-block">
                والذكاء الاصطناعي
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-2 bg-blue-400/20 rounded-full blur-sm"
                  animate={{
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }} />
                
              </span>
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.2
              }}
              className="text-lg md:text-xl text-slate-600 mb-6 leading-relaxed">
              
              في عالم تتسارع فيه التقنيات، وتتضاعف فيه البيانات، وتتحول فيه
              المعرفة إلى قوة تقود الاقتصاد والقرار، لم يعد الابتكار خيارًا
              إضافيًا… بل أصبح الأساس الذي تُبنى عليه المؤسسات التي تريد أن تبقى
              في الصدارة.
            </motion.p>

            <motion.p
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.3
              }}
              className="text-base md:text-lg text-slate-500 mb-10 mx-auto lg:mx-0">
              
              في شركة الشيخ عبد العزيز بن عبد الله المعلا للاستشارات والبحوث في
              الذكاء الاصطناعي نعمل على بناء منظومة متكاملة تجمع بين البحث
              العلمي، والتطوير التقني، والاستشارات الاستراتيجية لنحوّل المعرفة
              إلى حلول عملية.
            </motion.p>

            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.7,
                delay: 0.4
              }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              
              <button
                onClick={() => {
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
                
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                اكتشف المزيد
                {isRTL ? (
                  <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
              <button
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="cursor-pointer w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-800 font-bold text-lg border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-blue-200 hover:text-blue-700 hover:scale-105 transition-all flex items-center justify-center">
                
                تواصل معنا
              </button>
            </motion.div>

          </div>

          {/* Illustration (Left side in RTL) — Now with real image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 1,
              delay: 0.3
            }}
            className="flex justify-content items-center w-full lg:w-1/2 relative">
            
            <motion.div
              animate={{
                y: [-10, 10, -10]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative mx-auto">
              
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-3xl animate-pulse" />

              {/* Real AI Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 max-w-[460px] mx-auto lg:mx-0">
                <Image
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                  alt="تصور الذكاء الاصطناعي والتقنيات المتقدمة"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover aspect-4/5"
                  loading="lazy" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-blue-600/10" />
              </div>
            </motion.div>

            {/* Quote Box overlay */}
            <motion.div
              initial={{
                opacity: 0,
                x: -20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                duration: 1,
                delay: 0.8
              }}
              className="absolute bottom-10 left-0 md:right-10 p-5 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-xl z-20">
              
              <div className="flex gap-3">
                <div className="w-1 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full shrink-0" />
                <p className="text-sm md:text-base font-medium text-slate-700 italic leading-relaxed">
                  &quot;نحن لا نطوّر تقنيات فحسب… نحن نبني منظومات معرفية تساعد
                  المؤسسات على فهم المستقبل، والاستعداد له، وصناعته.&quot;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>);

}