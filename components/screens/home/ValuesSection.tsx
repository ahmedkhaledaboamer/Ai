"use client";
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import {
  LightbulbIcon,
  BriefcaseIcon,
  BookOpenCheckIcon,
  HandshakeIcon,
  AwardIcon } from
'lucide-react';
import Image from 'next/image';
const values = [
{
  title: 'الابتكار',
  desc: 'نسعى دائمًا إلى تطوير حلول جديدة تواكب تطور التكنولوجيا.',
  icon: LightbulbIcon,
  gradient: 'from-amber-400 to-orange-500',
  shadow: 'shadow-orange-500/20',
  text: 'text-orange-500',
  image:
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80',
  imageAlt: 'الابتكار والتكنولوجيا'
},
{
  title: 'الاحترافية',
  desc: 'نلتزم بأعلى المعايير المهنية في جميع أعمالنا.',
  icon: BriefcaseIcon,
  gradient: 'from-blue-500 to-indigo-600',
  shadow: 'shadow-blue-500/20',
  text: 'text-blue-600',
  image:
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  imageAlt: 'الاحترافية في العمل'
},
{
  title: 'المعرفة',
  desc: 'نؤمن أن البحث العلمي هو الأساس الحقيقي للتطور.',
  icon: BookOpenCheckIcon,
  gradient: 'from-emerald-400 to-teal-500',
  shadow: 'shadow-emerald-500/20',
  text: 'text-emerald-600',
  image:
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80',
  imageAlt: 'المعرفة والبحث العلمي'
},
{
  title: 'الثقة',
  desc: 'نبني علاقات طويلة المدى مع عملائنا تقوم على الشفافية والاحترام المتبادل.',
  icon: HandshakeIcon,
  gradient: 'from-purple-500 to-violet-600',
  shadow: 'shadow-purple-500/20',
  text: 'text-purple-600',
  image:
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&q=80',
  imageAlt: 'الثقة والشراكة'
},
{
  title: 'الجودة',
  desc: 'نحرص على تقديم خدمات وحلول تقنية بمعايير عالية من الجودة والكفاءة.',
  icon: AwardIcon,
  gradient: 'from-rose-400 to-pink-500',
  shadow: 'shadow-rose-500/20',
  text: 'text-rose-600',
  image:
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
  imageAlt: 'الجودة والتميز'
}];

export function ValuesSection() {
  return (
    <section id="values" className="bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(241,245,249,1)_0%,rgba(255,255,255,0)_70%)]" />
      </div>

      <div style={{ padding: '5%' }} className="mx-auto relative z-10">
        <SectionHeading
          title="قيمنا ومبادئنا"
          subtitle="نؤمن أن نجاح أي مؤسسة يعتمد على مجموعة من القيم التي توجه عملها وتحدد طريقة تعاملها مع شركائها." />
        

        <div className="flex flex-wrap justify-center gap-8 mt-16 mx-auto">
          {values.map((value, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group">
            
              {/* Colored Top Line */}
              <div
              className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${value.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />
            

              <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 bg-slate-50 relative z-10`}>
              
                <value.icon
                className={`w-8 h-8 transition-colors duration-500 ${value.text}`} />
              
              </div>

              {/* Value Image */}
              <div className="rounded-xl overflow-hidden mb-4">
                <Image
                src={value.image}
                alt={value.imageAlt}
                width={800}
                height={800}
                className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" />
              
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">
                {value.title}
              </h3>
              <p className="text-slate-600 leading-relaxed relative z-10 text-lg">
                {value.desc}
              </p>

              {/* Subtle background icon on hover */}
              <div className="absolute -bottom-6 -left-6 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 transform group-hover:scale-150 group-hover:rotate-12">
                <value.icon className="w-40 h-40" />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}