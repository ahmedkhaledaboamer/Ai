"use client";
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}
export function SectionHeading({
  title,
  subtitle,
  centered = true
}: SectionHeadingProps) {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <div className={`mb-12 ${centered ? 'text-center' : isRTL ? 'md:text-right text-center' : 'text-center md:text-left'}`}>
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
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.5
        }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 pb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-transparent bg-clip-text inline-block">
        
        {title}
      </motion.h2>
      {subtitle &&
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
          once: true,
          margin: '-100px'
        }}
        transition={{
          duration: 0.5,
          delay: 0.1
        }}
        className="text-lg text-slate-600 mx-auto leading-relaxed">
        
          {subtitle}
        </motion.p>
      }
    </div>);

}