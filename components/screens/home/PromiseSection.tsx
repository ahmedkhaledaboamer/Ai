"use client";
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import Image from 'next/image';
const commitments = [
{
  text: 'تقديم حلول تقنية مبنية على البحث العلمي',
  gradient: 'from-blue-400 to-blue-600'
},
{
  text: 'دعم المؤسسات في بناء قدراتها الرقمية',
  gradient: 'from-purple-400 to-purple-600'
},
{
  text: 'تطوير أنظمة تقنية آمنة ومستدامة',
  gradient: 'from-cyan-400 to-cyan-600'
},
{
  text: 'تمكين المؤسسات من الاستفادة من التقنيات الحديثة',
  gradient: 'from-emerald-400 to-emerald-600'
},
{
  text: 'المساهمة في بناء مستقبل رقمي أكثر تقدمًا',
  gradient: 'from-amber-400 to-amber-600'
}];

export function PromiseSection() {
  return (
    <section className="bg-slate-950 text-white relative overflow-hidden">
      {/* Rich Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
          className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600 blur-[120px]" />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1
          }}
          className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600 blur-[120px]" />
        

        {/* Floating Geometric SVGs */}
        <motion.svg
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity
          }}
          className="absolute top-[20%] left-[15%] w-24 h-24 opacity-10"
          viewBox="0 0 100 100">
          
          <polygon
            points="50,10 90,90 10,90"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2" />
          
        </motion.svg>
        <motion.svg
          animate={{
            y: [0, 40, 0],
            rotate: [0, -20, 0]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            delay: 2
          }}
          className="absolute bottom-[30%] right-[10%] w-32 h-32 opacity-10"
          viewBox="0 0 100 100">
          
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#C084FC"
            strokeWidth="2"
            strokeDasharray="10 5" />
          
        </motion.svg>

        {/* Star Particles */}
        {[...Array(15)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: `${7 + i * 6}%`,
            left: `${3 + i * 7}%`
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 2 + i % 3,
            repeat: Infinity,
            delay: i * 0.2
          }} />

        )}
      </div>

      <div style={{ padding: '5%' }} className="mx-auto relative z-10">
        <div className="mx-auto">
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
            className="text-center mb-16">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-cyan-300">
              وعدنا لك
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light">
              نلتزم بأن نكون شريكًا موثوقًا في رحلة التطور التقني والابتكار. وأن
              نعمل على:
            </p>
          </motion.div>

          {/* Two-column layout: image + commitments */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Side Image */}
            <motion.div
              initial={{
                opacity: 0,
                x: 30
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}
              className="w-full lg:w-2/5 relative">
              
              <div className="relative rounded-3xl overflow-hidden h-64 lg:h-full min-h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
                  alt="بيئة عمل تقنية متقدمة"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover"
                  loading="lazy" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-blue-600/20" />
                <div className="absolute bottom-6 right-6 left-6">
                  <p className="text-white font-bold text-xl text-right">
                    شريكك في رحلة التحول الرقمي
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Commitments Card */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5
              }}
              className="relative group w-full">
              
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />

              <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 relative h-full">
                <ul className="space-y-8">
                  {commitments.map((item, index) =>
                  <motion.li
                    key={index}
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
                    transition={{
                      delay: index * 0.1
                    }}
                    className="flex items-center gap-5 text-lg md:text-xl text-slate-100 group/item">
                    
                      <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shrink-0 shadow-lg group-hover/item:scale-110 transition-transform`}>
                      
                        <CheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <span className="group-hover/item:text-white transition-colors">
                        {item.text}
                      </span>
                    </motion.li>
                  )}
                </ul>

                <motion.div
                  initial={{
                    opacity: 0
                  }}
                  whileInView={{
                    opacity: 1
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 0.6
                  }}
                  className="mt-12 pt-8 border-t border-white/10 text-center relative">
                  
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
                  <p className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200 italic leading-relaxed">
                    &quot;نحن نؤمن أن الابتكار الحقيقي لا يتحقق بالصدفة… بل يتحقق عبر
                    المعرفة، والتخطيط، والتنفيذ المحكم.&quot;
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);

}