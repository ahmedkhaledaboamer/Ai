"use client";
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { SearchIcon, Code2Icon, LightbulbIcon, WrenchIcon } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
const methodologies = [
{
  title: 'البحث والتحليل العميق',
  icon: SearchIcon,
  color: 'text-blue-600',
  bg: 'bg-blue-50',
  borderTop: 'bg-gradient-to-r from-blue-400 to-blue-600',
  hoverBg: 'hover:bg-blue-50/50'
},
{
  title: 'التطوير التقني المتقدم',
  icon: Code2Icon,
  color: 'text-purple-600',
  bg: 'bg-purple-50',
  borderTop: 'bg-gradient-to-r from-purple-400 to-purple-600',
  hoverBg: 'hover:bg-purple-50/50'
},
{
  title: 'الاستشارات الاستراتيجية',
  icon: LightbulbIcon,
  color: 'text-cyan-600',
  bg: 'bg-cyan-50',
  borderTop: 'bg-gradient-to-r from-cyan-400 to-cyan-600',
  hoverBg: 'hover:bg-cyan-50/50'
},
{
  title: 'التنفيذ العملي للحلول',
  icon: WrenchIcon,
  color: 'text-indigo-600',
  bg: 'bg-indigo-50',
  borderTop: 'bg-gradient-to-r from-indigo-400 to-indigo-600',
  hoverBg: 'hover:bg-indigo-50/50'
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
export function AboutSection() {
  const locale = useLocale();
  const isRTL = locale === 'ar';
  return (
    <section id="about"  className="bg-white relative overflow-hidden">
      {/* Decorative Dot Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50 pointer-events-none" />

      {/* Decorative SVG Elements */}
      <div className="absolute top-20 right-[-5%] w-[30%] h-[30%] opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#3B82F6"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.4,-3.1C94,11.8,85.2,26.1,75.1,38.5C65,50.9,53.6,61.4,40.5,69.3C27.4,77.2,12.6,82.5,-2.1,86.1C-16.8,89.7,-31.4,91.6,-44.5,86.1C-57.6,80.6,-69.2,67.7,-77.8,53.2C-86.4,38.7,-92,22.6,-92.4,6.4C-92.8,-9.8,-88,-26.1,-79.1,-40.1C-70.2,-54.1,-57.2,-65.8,-43.1,-73C-29,-80.2,-14.5,-82.9,0.7,-84.1C15.9,-85.3,30.6,-83.6,44.7,-76.4Z"
            transform="translate(100 100) scale(1.1)" />
          
        </svg>
      </div>
      <div className="absolute bottom-10 left-[-5%] w-[25%] h-[25%] opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#8B5CF6"
            d="M39.9,-65.7C54.1,-60.5,69.6,-53.8,79.8,-41.8C90,-29.8,94.9,-12.5,93.1,4.1C91.3,20.7,82.8,36.6,71.4,49.2C60,61.8,45.7,71.1,30.3,76.5C14.9,81.9,-1.6,83.4,-17.5,80.4C-33.4,77.4,-48.7,69.9,-61.1,58.3C-73.5,46.7,-83,31,-86.8,14.2C-90.6,-2.6,-88.7,-20.5,-79.9,-35.1C-71.1,-49.7,-55.4,-61,-40.1,-66.5C-24.8,-72,-9.9,-71.7,3.1,-76.1C16.1,-80.5,32.2,-89.6,39.9,-65.7Z"
            transform="translate(100 100)" />
          
        </svg>
      </div>

      <div style={{ padding: '5%' }} className=" mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="w-full lg:w-3/5">
            <SectionHeading title="من نحن؟" centered={false} />

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
                duration: 0.5
              }}
              className="space-y-6 text-lg text-slate-600 leading-relaxed">
              
              <p className={`font-bold text-slate-800 text-2xl border-blue-500 ${isRTL ? 'pr-4 border-r-4' : 'pl-4 border-l-4'}`}>
                نحن كيان بحثي وتقني يعمل عند نقطة الالتقاء بين العلم والتطبيق，
                والبحث والابتكار، والتكنولوجيا وصناعة القرار.
              </p>
              <p className={` text-center ${isRTL ? 'md:text-right md:pr-5' : 'md:text-left md:pl-5'}`}>
                تأسست الشركة لتكون منصة تجمع الخبرات المتخصصة في مجالات الذكاء
                الاصطناعي، والأمن السيبراني، والبنية التحتية التقنية، والبحوث
                المتقدمة، بهدف تقديم حلول متكاملة تدعم المؤسسات في رحلتها نحو
                التحول الرقمي والابتكار المستدام.
              </p>

              <div className="relative p-8 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-3xl border border-blue-100 my-8 shadow-sm overflow-hidden group">
                <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-2 h-full bg-gradient-to-b from-blue-400 to-cyan-400`} />
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                <p className="text-blue-900 font-medium text-xl leading-relaxed relative z-10">
                  نحن نؤمن أن التكنولوجيا لا تُقاس بتعقيدها… بل بقدرتها على
                  تحسين الواقع، ودعم القرار، وبناء مستقبل أكثر كفاءة واستدامة.
                </p>
              </div>

              <p className="font-bold text-slate-800 text-xl pr-5">
                ولهذا نعمل وفق منهجية تجمع بين:
              </p>
            </motion.div>
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
            className="w-full lg:w-2/5 hidden lg:block relative">
            
            <div className="relative w-full mx-auto flex justify-center items-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 via-purple-50 to-cyan-100 rounded-3xl blur-3xl opacity-60" />
              <div className="relative rounded-3xl overflow-hidden  max-w-[460px] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                  alt="فريق العمل في بيئة تعاونية"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover aspect-[4/5]"
                  loading="lazy" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-blue-600/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-lg text-right">
                    فريق متخصص في الابتكار التقني
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-50px'
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto">
          
          {methodologies.map((item, index) =>
          <motion.div
            key={index}
            variants={itemVariants}
            className={`bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group relative overflow-hidden ${item.hoverBg}`}>
            
              <div
              className={`absolute top-0 left-0 right-0 h-1.5 ${item.borderTop}`} />
            
              <div className="p-8">
                <div
                className={`w-16 h-16 mx-auto rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                  {item.title}
                </h3>
              </div>
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
            duration: 0.5,
            delay: 0.4
          }}
          className="text-center mt-16  mx-auto">
          
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100/50 shadow-sm">
            <p className="text-slate-700 text-lg font-medium">
              لنمنح عملاءنا رؤية أوضح، وقدرة أكبر على التعامل مع التحديات والفرص
              في عالم رقمي متغير.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

}