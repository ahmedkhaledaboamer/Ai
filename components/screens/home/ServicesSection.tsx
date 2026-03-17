"use client";
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import {
  BrainIcon,
  ShieldIcon,
  CodeIcon,
  ServerIcon,
  CpuIcon,
  CheckCircle2Icon,
  CloudIcon,
  LineChartIcon,
  GraduationCapIcon,
  TargetIcon,
  ArrowLeftIcon, 
  ArrowRightIcon} from
'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
const services = [
{
  title: 'الذكاء الاصطناعي والابتكار',
  description:
  'نطوّر حلول الذكاء الاصطناعي التي تساعد المؤسسات على تحليل البيانات، وفهم الأنماط، وبناء أنظمة ذكية تدعم اتخاذ القرار وتحسّن الأداء.',
  icon: BrainIcon,
  color: 'text-white',
  textColor: 'text-blue-500',
  bg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
  stripe: 'bg-gradient-to-r from-blue-400 to-cyan-400',
  glow: 'group-hover:shadow-blue-500/20',
  image:
  'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80',
  imageAlt: 'تقنيات الذكاء الاصطناعي',
  items: [
  'استشارات وأبحاث الذكاء الاصطناعي',
  'تطوير تطبيقات وأنظمة الذكاء الاصطناعي',
  'التدريب وبناء القدرات في مجال الذكاء الاصطناعي',
  'تطوير حلول الابتكار التقني']

},
{
  title: 'الأمن السيبراني وإدارة المخاطر الرقمية',
  description:
  'مع تزايد التحديات الأمنية في العالم الرقمي، نوفر منظومة متكاملة لحماية البنية التحتية التقنية للمؤسسات وضمان أمن المعلومات والأنظمة.',
  icon: ShieldIcon,
  color: 'text-white',
  textColor: 'text-red-500',
  bg: 'bg-gradient-to-br from-red-500 to-orange-500',
  stripe: 'bg-gradient-to-r from-red-400 to-orange-400',
  glow: 'group-hover:shadow-red-500/20',
  image:
  'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=400&q=80',
  imageAlt: 'الأمن السيبراني وحماية البيانات',
  items: [
  'تصميم هيكلية الأمن السيبراني',
  'استشارات الأمن السيبراني',
  'إدارة المخاطر السيبرانية',
  'تدقيق واختبار المخاطر الأمنية',
  'إدارة أمن تكنولوجيا المعلومات',
  'خدمات الأمن السيبراني المدار']

},
{
  title: 'تطوير البرمجيات والأنظمة الرقمية',
  description:
  'نصمم ونطوّر أنظمة برمجية متقدمة تلبي احتياجات المؤسسات وتدعم عملياتها التشغيلية والتقنية.',
  icon: CodeIcon,
  color: 'text-white',
  textColor: 'text-purple-500',
  bg: 'bg-gradient-to-br from-purple-500 to-violet-600',
  stripe: 'bg-gradient-to-r from-purple-400 to-violet-500',
  glow: 'group-hover:shadow-purple-500/20',
  image:
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
  imageAlt: 'تطوير البرمجيات والأكواد',
  items: [
  'تطوير تطبيقات البرمجيات',
  'تصميم الأنظمة البرمجية',
  'تطوير قواعد البيانات',
  'تصميم مواقع الويب',
  'تطوير تطبيقات التواصل الاجتماعي',
  'تخصيص وتعديل الأنظمة البرمجية']

},
{
  title: 'البنية التحتية لتكنولوجيا المعلومات',
  description:
  'نساعد المؤسسات على بناء بنية تقنية قوية تدعم عملياتها الرقمية وتضمن استمرارية الأعمال.',
  icon: ServerIcon,
  color: 'text-white',
  textColor: 'text-emerald-500',
  bg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
  stripe: 'bg-gradient-to-r from-emerald-400 to-teal-400',
  glow: 'group-hover:shadow-emerald-500/20',
  image:
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80',
  imageAlt: 'البنية التحتية لتكنولوجيا المعلومات',
  items: [
  'تصميم البنية التحتية لتكنولوجيا المعلومات',
  'إدارة وتشغيل شبكات الحاسب الآلي',
  'استشارات الشبكات',
  'تخطيط وتصميم الأنظمة المتكاملة',
  'إدارة مرافق الحاسب الآلي']

},
{
  title: 'التقنيات المتقدمة',
  description:
  'نعمل على تطوير حلول تعتمد على أحدث التقنيات التي تسهم في خلق تجارب رقمية جديدة.',
  icon: CpuIcon,
  color: 'text-white',
  textColor: 'text-cyan-500',
  bg: 'bg-gradient-to-br from-cyan-500 to-blue-600',
  stripe: 'bg-gradient-to-r from-cyan-400 to-blue-500',
  glow: 'group-hover:shadow-cyan-500/20',
  image:
  'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=400&q=80',
  imageAlt: 'تقنيات الواقع الافتراضي والمعزز',
  items: [
  'تطوير تطبيقات الواقع الافتراضي',
  'تطوير تطبيقات الواقع المعزز',
  'تصميم الأنظمة الإلكترونية',
  'تطوير البرمجيات للأجهزة الذكية']

},
{
  title: 'الحوسبة السحابية والتحول الرقمي',
  description:
  'نساعد المؤسسات على الانتقال إلى البيئات السحابية وتبني استراتيجيات التحول الرقمي الشاملة لتحقيق المرونة والكفاءة التشغيلية.',
  icon: CloudIcon,
  color: 'text-white',
  textColor: 'text-sky-500',
  bg: 'bg-gradient-to-br from-sky-500 to-indigo-500',
  stripe: 'bg-gradient-to-r from-sky-400 to-indigo-400',
  glow: 'group-hover:shadow-sky-500/20',
  image:
  'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80',
  imageAlt: 'الحوسبة السحابية والتحول الرقمي',
  items: [
  'تصميم وتنفيذ البنية السحابية',
  'استراتيجيات التحول الرقمي',
  'ترحيل الأنظمة إلى السحابة',
  'إدارة البيئات السحابية المتعددة',
  'تحسين الأداء السحابي']

},
{
  title: 'تحليل البيانات وذكاء الأعمال',
  description:
  'نحوّل البيانات الخام إلى رؤى استراتيجية قابلة للتنفيذ من خلال أدوات التحليل المتقدمة ولوحات المعلومات التفاعلية.',
  icon: LineChartIcon,
  color: 'text-white',
  textColor: 'text-amber-500',
  bg: 'bg-gradient-to-br from-amber-500 to-yellow-500',
  stripe: 'bg-gradient-to-r from-amber-400 to-yellow-400',
  glow: 'group-hover:shadow-amber-500/20',
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
  imageAlt: 'تحليل البيانات وذكاء الأعمال',
  items: [
  'تحليل البيانات الضخمة',
  'تصميم لوحات المعلومات التفاعلية',
  'نمذجة البيانات والتنبؤ',
  'استشارات ذكاء الأعمال',
  'تكامل مصادر البيانات']

},
{
  title: 'التدريب وبناء القدرات',
  description:
  'نقدم برامج تدريبية متخصصة ومعتمدة لتأهيل الكوادر البشرية وتمكينها من التعامل مع أحدث التقنيات والأدوات الرقمية.',
  icon: GraduationCapIcon,
  color: 'text-white',
  textColor: 'text-rose-500',
  bg: 'bg-gradient-to-br from-rose-500 to-pink-500',
  stripe: 'bg-gradient-to-r from-rose-400 to-pink-400',
  glow: 'group-hover:shadow-rose-500/20',
  image:
  'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80',
  imageAlt: 'التدريب وبناء القدرات',
  items: [
  'برامج تدريب الذكاء الاصطناعي',
  'ورش عمل الأمن السيبراني',
  'تدريب تطوير البرمجيات',
  'شهادات مهنية معتمدة',
  'برامج تدريب مخصصة للمؤسسات']

},
{
  title: 'الاستشارات الاستراتيجية لتقنية المعلومات',
  description:
  'نقدم استشارات استراتيجية شاملة تساعد المؤسسات على رسم خارطة طريق تقنية واضحة تتوافق مع أهدافها وتطلعاتها المستقبلية.',
  icon: TargetIcon,
  color: 'text-white',
  textColor: 'text-fuchsia-500',
  bg: 'bg-gradient-to-br from-fuchsia-500 to-purple-600',
  stripe: 'bg-gradient-to-r from-fuchsia-400 to-purple-500',
  glow: 'group-hover:shadow-fuchsia-500/20',
  image:
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80',
  imageAlt: 'الاستشارات الاستراتيجية',
  items: [
  'تقييم النضج التقني للمؤسسات',
  'تصميم خارطة الطريق التقنية',
  'استشارات الحوكمة التقنية',
  'تحليل الجدوى التقنية',
  'إدارة المشاريع التقنية']

}];

export function ServicesSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section
      id="services"
      className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Hexagonal Background Pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hexagons"
              width="50"
              height="43.4"
              patternUnits="userSpaceOnUse"
              patternTransform="scale(2)">
              
              <path
                d="M25 0 L50 14.4 L50 43.4 L25 28.9 Z M0 14.4 L25 0 L25 28.9 L0 43.4 Z"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="0.5" />
              
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div style={{ padding: '5%' }} className="mx-auto relative z-10">
        <SectionHeading
          title="خدماتنا الأساسية"
          subtitle="نقدم منظومة متكاملة من الخدمات التقنية والاستشارية التي تغطي مختلف جوانب التحول الرقمي والابتكار." />
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
          {services.map((service, index) =>
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
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className={`bg-white rounded-3xl shadow-md border border-slate-100 transition-all duration-300 flex flex-col h-full relative overflow-hidden group hover:-translate-y-1 hover:shadow-2xl ${service.glow}`}>
            
              {/* Colored Gradient Stripe */}
              <div
              className={`absolute top-0 left-0 right-0 h-2 ${service.stripe}`} />
            

              {/* Number Badge */}
              <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:bg-white group-hover:text-slate-600 transition-colors z-10">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="p-8 flex flex-col">
                <div
                className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>

                {/* Service Image */}
                <div className="rounded-xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={800}
                  height={800}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
                
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-slate-100 bg-slate-50/50 -mx-8 px-8 pb-6 mb-6">
                  {service.items.map((item, i) =>
                <div key={i} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-white shadow-sm p-0.5 shrink-0">
                        <CheckCircle2Icon
                      className={`w-4 h-4 ${service.textColor}`} />
                    
                      </div>
                      <span className="text-sm text-slate-700 font-medium leading-snug">
                        {item}
                      </span>
                    </div>
                )}
                </div>

              </div>
            </motion.div>
          )}
        </div>

        {/* Professional CTA Section */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="mt-20 mx-auto">
          
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-2xl">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-[length:20px_20px]" />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                هل تبحث عن حل تقني مخصص لمؤسستك؟
              </h3>
              <p className="text-lg md:text-xl text-slate-300 mb-10 mx-auto">
                فريقنا جاهز لمساعدتك في تحديد الخدمة المناسبة لاحتياجاتك وبناء
                استراتيجية تقنية تضمن لك التفوق.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all group">
                
                تواصل معنا الآن
                {!isRTL ? (
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                ) : (
                  <ArrowLeftIcon className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                )}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}