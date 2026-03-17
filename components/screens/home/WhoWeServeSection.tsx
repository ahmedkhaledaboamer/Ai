"use client";
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import {
  LandmarkIcon,
  LaptopIcon,
  GraduationCapIcon,
  BookOpenIcon,
  Building2Icon,
  RocketIcon } from
'lucide-react';
import Image from 'next/image';
const sectors = [
{
  title: 'الجهات الحكومية والمؤسسات العامة',
  icon: LandmarkIcon,
  color: 'text-blue-600',
  bg: 'bg-blue-50',
  border: 'border-blue-100',
  hoverBg: 'hover:bg-blue-50/50',
  accent: 'bg-gradient-to-r from-blue-400 to-blue-600',
  image:
  'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=400&q=80',
  imageAlt: 'الجهات الحكومية'
},
{
  title: 'الشركات التقنية والمؤسسات الرقمية',
  icon: LaptopIcon,
  color: 'text-purple-600',
  bg: 'bg-purple-50',
  border: 'border-purple-100',
  hoverBg: 'hover:bg-purple-50/50',
  accent: 'bg-gradient-to-r from-purple-400 to-purple-600',
  image:
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
  imageAlt: 'الشركات التقنية'
},
{
  title: 'الجامعات ومراكز الأبحاث',
  icon: GraduationCapIcon,
  color: 'text-emerald-600',
  bg: 'bg-emerald-50',
  border: 'border-emerald-100',
  hoverBg: 'hover:bg-emerald-50/50',
  accent: 'bg-gradient-to-r from-emerald-400 to-emerald-600',
  image:
  'https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80',
  imageAlt: 'الجامعات ومراكز الأبحاث'
},
{
  title: 'المؤسسات التعليمية',
  icon: BookOpenIcon,
  color: 'text-amber-600',
  bg: 'bg-amber-50',
  border: 'border-amber-100',
  hoverBg: 'hover:bg-amber-50/50',
  accent: 'bg-gradient-to-r from-amber-400 to-amber-600',
  image:
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
  imageAlt: 'المؤسسات التعليمية'
},
{
  title: 'الشركات الكبرى والمتوسطة',
  icon: Building2Icon,
  color: 'text-rose-600',
  bg: 'bg-rose-50',
  border: 'border-rose-100',
  hoverBg: 'hover:bg-rose-50/50',
  accent: 'bg-gradient-to-r from-rose-400 to-rose-600',
  image:
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
  imageAlt: 'الشركات الكبرى'
},
{
  title: 'المؤسسات الراغبة في التحول الرقمي',
  icon: RocketIcon,
  color: 'text-cyan-600',
  bg: 'bg-cyan-50',
  border: 'border-cyan-100',
  hoverBg: 'hover:bg-cyan-50/50',
  accent: 'bg-gradient-to-r from-cyan-400 to-cyan-600',
  image:
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&q=80',
  imageAlt: 'التحول الرقمي'
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
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
export function WhoWeServeSection() {
  return (
    <section className="bg-slate-50 relative overflow-hidden">
      {/* Decorative Wave Divider at Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-[50px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff">
          </path>
        </svg>
      </div>

      <div style={{ padding: '5%' }} className="mx-auto relative z-10 mt-10">
        <SectionHeading
          title="من نخدم؟"
          subtitle="نقدّم خدماتنا لمجموعة واسعة من القطاعات التي تسعى إلى الاستفادة من التقنيات الحديثة والابتكار." />
        

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-16">
          
          {sectors.map((sector, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className={`group rounded-3xl bg-white border ${sector.border} ${sector.hoverBg} shadow-sm hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden`}>
            
              {/* Sector Image */}
              <div className="relative h-36 w-full overflow-hidden">
                <Image
                src={sector.image}
                alt={sector.imageAlt}
                width={800}
                height={800}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="p-6 pt-2">
                {/* Gradient Accent Line */}
                <div
                className={`absolute bottom-0 left-0 right-0 h-1.5 ${sector.accent} transform translate-y-full group-hover:translate-y-0 transition-transform duration-300`} />
              

                <div
                className={`w-16 h-16 mx-auto ${sector.bg} rounded-full flex items-center justify-center -mt-10 mb-4 relative z-10 border-4 border-white shadow-md group-hover:scale-110 transition-transform duration-300 ${sector.color}`}>
                
                  <sector.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                  {sector.title}
                </h3>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}