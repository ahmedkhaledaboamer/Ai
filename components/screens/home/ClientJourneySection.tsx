"use client";
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import {
  SearchIcon,
  BarChart3Icon,
  WrenchIcon,
  RocketIcon,
  TrendingUpIcon } from
'lucide-react';
import Image from 'next/image';
const steps = [
{
  num: '1',
  title: 'فهم التحديات',
  desc: 'نبدأ بدراسة احتياجات المؤسسة وفهم التحديات والفرص المتاحة.',
  icon: SearchIcon,
  color: 'text-blue-600',
  bg: 'bg-blue-100',
  border: 'border-blue-500',
  gradient: 'from-blue-500 to-blue-600',
  image:
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80',
  imageAlt: 'فهم التحديات والاحتياجات'
},
{
  num: '2',
  title: 'التحليل والتخطيط',
  desc: 'نقوم بتحليل الوضع التقني والتنظيمي ووضع خطة عمل واضحة.',
  icon: BarChart3Icon,
  color: 'text-purple-600',
  bg: 'bg-purple-100',
  border: 'border-purple-500',
  gradient: 'from-purple-500 to-purple-600',
  image:
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80',
  imageAlt: 'التحليل والتخطيط الاستراتيجي'
},
{
  num: '3',
  title: 'تطوير الحلول',
  desc: 'نصمم حلولًا تقنية واستشارية مخصصة تلبي احتياجات العميل.',
  icon: WrenchIcon,
  color: 'text-cyan-600',
  bg: 'bg-cyan-100',
  border: 'border-cyan-500',
  gradient: 'from-cyan-500 to-cyan-600',
  image:
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&q=80',
  imageAlt: 'تطوير الحلول التقنية'
},
{
  num: '4',
  title: 'التنفيذ',
  desc: 'يتم تنفيذ الحلول عبر فرق متخصصة وفق أعلى المعايير التقنية.',
  icon: RocketIcon,
  color: 'text-emerald-600',
  bg: 'bg-emerald-100',
  border: 'border-emerald-500',
  gradient: 'from-emerald-500 to-emerald-600',
  image:
  'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=200&q=80',
  imageAlt: 'تنفيذ المشاريع التقنية'
},
{
  num: '5',
  title: 'المتابعة والتطوير',
  desc: 'نستمر في متابعة الأداء وتطوير الحلول لضمان تحقيق أفضل النتائج.',
  icon: TrendingUpIcon,
  color: 'text-amber-600',
  bg: 'bg-amber-100',
  border: 'border-amber-500',
  gradient: 'from-amber-500 to-amber-600',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80',
  imageAlt: 'المتابعة والتطوير المستمر'
}];

export function ClientJourneySection() {
  return (
    <section id="journey" className="bg-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="diagonal"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse">
              
              <path
                d="M-10,10 l20,-20 M0,40 l40,-40 M30,50 l20,-20"
                stroke="#000"
                strokeWidth="2" />
              
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonal)" />
        </svg>
      </div>

      <div style={{ padding: '5%' }} className="mx-auto relative z-10">
        <SectionHeading
          title="رحلة العميل معنا"
          subtitle="نعمل وفق منهجية واضحة تضمن تحقيق أفضل النتائج لعملائنا." />
        

        <div className="mx-auto mt-20 relative">
          {/* Multi-color Vertical Line */}
          <div className="absolute right-8 md:right-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 via-purple-500 via-cyan-500 via-emerald-500 to-amber-500 rounded-full transform md:translate-x-1/2 opacity-30" />

          <div className="space-y-16">
            {steps.map((step, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-100px'
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              className={`relative flex items-center flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
                {/* Number Indicator */}
                <div
                className={`absolute right-4 md:right-1/2 w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center font-bold text-white text-xl z-10 transform translate-x-1/2 md:translate-x-1/2 shadow-lg ring-4 ring-white`}>
                
                  {step.num}
                </div>

                {/* Content Card */}
                <div
                className={`w-full md:w-1/2 pr-20 md:pr-0 ${index % 2 === 0 ? 'md:pl-16 text-right md:text-left' : 'md:pr-16 text-right'}`}>
                
                  <div
                  className={`bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${index % 2 === 0 ? `border-l-4 ${step.border}` : `border-r-4 ${step.border}`}`}>
                  
                    {/* Background Icon Watermark */}
                    <div className="absolute -bottom-4 -right-4 opacity-5 transform group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-32 h-32" />
                    </div>

                    <div
                    className="flex items-center gap-4 mb-4 justify-end md:justify-start"
                    dir={index % 2 === 0 ? 'ltr' : 'rtl'}>
                    
                      {/* Circular Thumbnail Image */}
                      <Image
                      src={step.image}
                      alt={step.imageAlt}
                      width={800}
                      height={800}
                      className="w-16 h-16 rounded-full object-cover shadow-md border-2 border-white shrink-0"
                      loading="lazy" />
                    
                      <div
                      className={`w-12 h-12 rounded-xl ${step.bg} flex items-center justify-center shrink-0`}>
                      
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <h3
                      className="text-2xl font-bold text-slate-800"
                      dir="rtl">
                      
                        {step.title}
                      </h3>
                    </div>
                    <p
                    className="text-slate-600 text-lg leading-relaxed"
                    dir="rtl">
                    
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}