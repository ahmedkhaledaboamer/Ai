"use client";
import { motion } from 'framer-motion';
import {
  NetworkIcon,
  ShieldCheckIcon,
  SettingsIcon,
  BarChart3Icon,
  LightbulbIcon,
  UsersIcon } from
'lucide-react';
import Image from 'next/image';
const offerings = [
{
  text: 'الاستفادة من الذكاء الاصطناعي في تطوير أعمالها',
  icon: NetworkIcon,
  color: 'text-blue-400',
  bg: 'bg-blue-500/20',
  border: 'group-hover:border-blue-500/50',
  glow: 'group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]'
},
{
  text: 'بناء بنية رقمية آمنة ومستدامة',
  icon: ShieldCheckIcon,
  color: 'text-emerald-400',
  bg: 'bg-emerald-500/20',
  border: 'group-hover:border-emerald-500/50',
  glow: 'group-hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]'
},
{
  text: 'تطوير أنظمة تقنية متقدمة تدعم العمليات',
  icon: SettingsIcon,
  color: 'text-purple-400',
  bg: 'bg-purple-500/20',
  border: 'group-hover:border-purple-500/50',
  glow: 'group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]'
},
{
  text: 'تحليل البيانات وصناعة قرارات أكثر دقة',
  icon: BarChart3Icon,
  color: 'text-amber-400',
  bg: 'bg-amber-500/20',
  border: 'group-hover:border-amber-500/50',
  glow: 'group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]'
},
{
  text: 'تعزيز الابتكار داخل المؤسسات',
  icon: LightbulbIcon,
  color: 'text-rose-400',
  bg: 'bg-rose-500/20',
  border: 'group-hover:border-rose-500/50',
  glow: 'group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]'
},
{
  text: 'بناء قدرات بشرية مؤهلة للتعامل مع التقنيات الحديثة',
  icon: UsersIcon,
  color: 'text-cyan-400',
  bg: 'bg-cyan-500/20',
  border: 'group-hover:border-cyan-500/50',
  glow: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]'
}];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4
    }
  }
};
export function WhatWeOfferSection() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-[128px] opacity-40" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[128px] opacity-40" />
      </div>

      <div style={{ padding: '5%' }} className="mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2
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
            className="text-3xl md:text-4xl pb-4 lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-transparent bg-clip-text inline-block">
            
            ماذا نقدم؟
          </motion.h2>
          <motion.p
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
            transition={{
              delay: 0.1
            }}
            className="text-xl text-slate-300 mx-auto">
            
            نقدّم منظومة متكاملة من الحلول التقنية والاستشارية التي تساعد
            المؤسسات على:
          </motion.p>
        </div>

        {/* Real Image replacing SVG illustration */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="max-w-3xl mx-auto mb-12 relative hidden md:block">
          
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto mb-16">
          
          {offerings.map((item, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className={`bg-slate-900/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl transition-all duration-300 flex items-center gap-5 group ${item.border} ${item.glow}`}>
            
              <div
              className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
              
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <p className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">
                {item.text}
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
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
          transition={{
            delay: 0.4
          }}
          className="text-center mx-auto p-10 rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/40 border border-white/10 backdrop-blur-md relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
          <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-cyan-200 leading-relaxed">
            نحن لا نقدّم حلولًا تقنية فقط… نحن نعمل على بناء بيئة معرفية وتقنية
            تمكّن المؤسسات من التطور المستمر.
          </p>
        </motion.div>
      </div>
    </section>);

}