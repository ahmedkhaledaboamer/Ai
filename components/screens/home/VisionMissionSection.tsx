"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';
export function VisionMissionSection() {
  return (
    <section
      id="vision"
      className="py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] bg-[length:30px_30px]" />
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity
          }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
        
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2
          }}
          className="absolute bottom-0 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
        

        {/* Floating Particles */}
        {[...Array(10)].map((_, i) =>
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white rounded-full"
          style={{
            top: `${10 + i * 9}%`,
            left: `${5 + i * 10}%`,
            opacity: 0.1 + i % 5 * 0.1
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.8, 0.1]
          }}
          transition={{
            duration: 3 + i % 4,
            repeat: Infinity,
            delay: i * 0.3
          }} />

        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
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
            className="text-3xl pb-4 md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-transparent bg-clip-text inline-block">
            
            رؤيتنا ورسالتنا
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto rounded-full" />
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
          {/* Vision Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
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
            className="relative group rounded-3xl p-[2px] overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="bg-slate-900/90 backdrop-blur-xl rounded-[22px] h-full relative overflow-hidden">
              {/* Vision Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80"
                  alt="رؤية مستقبلية للتكنولوجيا والفضاء"
                  className="w-full h-full object-cover"
                  loading="lazy" 
                  width={500}
                  height={500}  
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
              </div>

              <div className="p-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150" />

                {/* Telescope SVG Icon */}
                <div className="w-16 h-16 mb-6 relative -mt-14 z-10">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-blue-500/40 transition-colors" />
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full relative z-10 drop-shadow-lg">
                    
                    <defs>
                      <linearGradient
                        id="visionGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%">
                        
                        <stop offset="0%" stopColor="#60A5FA" />
                        <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="url(#visionGrad)"
                      opacity="0.15" />
                    
                    <path
                      d="M30 70 L70 30"
                      stroke="url(#visionGrad)"
                      strokeWidth="8"
                      strokeLinecap="round" />
                    
                    <path
                      d="M60 20 L80 40"
                      stroke="url(#visionGrad)"
                      strokeWidth="12"
                      strokeLinecap="round" />
                    
                    <circle cx="70" cy="30" r="10" fill="#fff" opacity="0.9" />
                    <circle cx="72" cy="28" r="3" fill="#0EA5E9" />
                    <path
                      d="M80 10 L82 15 L87 17 L82 19 L80 24 L78 19 L73 17 L78 15 Z"
                      fill="#fff"
                      opacity="0.8" />
                    
                  </svg>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  رؤيتنا
                  <span className="w-8 h-1 bg-cyan-400 rounded-full" />
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  أن نكون من الجهات الرائدة إقليميًا وعالميًا في البحوث التقنية
                  والاستشارات المتقدمة في مجالات الذكاء الاصطناعي والابتكار، وأن
                  نساهم في تطوير منظومات معرفية وتقنية تدعم المؤسسات والمجتمعات
                  في بناء مستقبل أكثر تقدمًا.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="relative group rounded-3xl p-[2px] overflow-hidden">
            
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="bg-slate-900/90 backdrop-blur-xl rounded-[22px] h-full relative overflow-hidden">
              {/* Mission Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=600&q=80"
                  alt="إطلاق صاروخ يرمز للانطلاق والابتكار"
                  className="w-full h-full object-cover"
                  loading="lazy" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
              </div>

              <div className="p-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-bl-full -z-10 transition-transform duration-700 group-hover:scale-150" />

                {/* Rocket SVG Icon */}
                <div className="w-16 h-16 mb-6 relative -mt-14 z-10">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:bg-purple-500/40 transition-colors" />
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full relative z-10 drop-shadow-lg">
                    
                    <defs>
                      <linearGradient
                        id="missionGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%">
                        
                        <stop offset="0%" stopColor="#C084FC" />
                        <stop offset="100%" stopColor="#F472B6" />
                      </linearGradient>
                      <linearGradient
                        id="flameGrad"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%">
                        
                        <stop offset="0%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#EF4444" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="url(#missionGrad)"
                      opacity="0.15" />
                    
                    <path
                      d="M50 15 C60 30, 65 50, 65 65 L35 65 C35 50, 40 30, 50 15 Z"
                      fill="url(#missionGrad)" />
                    
                    <circle
                      cx="50"
                      cy="45"
                      r="8"
                      fill="#1E293B"
                      stroke="#fff"
                      strokeWidth="2" />
                    
                    <path
                      d="M35 55 L20 75 L35 65 Z"
                      fill="url(#missionGrad)"
                      opacity="0.8" />
                    
                    <path
                      d="M65 55 L80 75 L65 65 Z"
                      fill="url(#missionGrad)"
                      opacity="0.8" />
                    
                    <path d="M40 65 L50 90 L60 65 Z" fill="url(#flameGrad)" />
                    <path d="M45 65 L50 80 L55 65 Z" fill="#FEF08A" />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  رسالتنا
                  <span className="w-8 h-1 bg-pink-400 rounded-full" />
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  تطوير حلول مبتكرة قائمة على البحث العلمي والتكنولوجيا
                  المتقدمة، وتمكين المؤسسات من الاستفادة من التقنيات الحديثة في
                  تحسين الأداء، وتعزيز الأمن الرقمي، ودعم اتخاذ القرار، وبناء
                  نماذج عمل أكثر كفاءة واستدامة.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}