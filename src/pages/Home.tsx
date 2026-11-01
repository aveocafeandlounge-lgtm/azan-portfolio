import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Award, BookOpen, TrendingUp } from 'lucide-react';
import { profile } from '../data/profile';

export function Home() {
  return (
    <div className="pt-16">
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-grey-soft to-white dark:from-navy dark:to-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <img
                src="/images/viber_image_2026-10-19_22-39-43-227.jpg"
                alt="Mohamed Azan Abdul Rahman"
                className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover object-top border-4 border-gold/30 shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center lg:text-left flex-1"
            >
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-white mb-4">
                MOHAMED AZAN<br />
                <span className="text-gold">ABDUL RAHMAN</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-blue dark:text-blue-light mb-6">
                {profile.title}
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8">
                {profile.introduction}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 bg-navy dark:bg-white text-white dark:text-navy rounded-lg hover:bg-navy-light dark:hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base"
                >
                  Explore My Portfolio
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 border-2 border-navy dark:border-white text-navy dark:text-white rounded-lg hover:bg-navy dark:hover:bg-white hover:text-white dark:hover:text-navy transition-colors font-medium text-sm sm:text-base"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  Download My CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white text-center mb-8 sm:mb-12"
          >
            Achievement Highlights
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gold/10 to-gold/5 p-6 sm:p-8 rounded-lg border border-gold/30 text-center"
            >
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-gold mx-auto mb-3 sm:mb-4" />
              <div className="font-display text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-2">
                7 A*s & 1 A
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">O-Level Results</p>
              <p className="text-gold font-medium mt-1 sm:mt-2 text-sm sm:text-base">2nd Place — National Top 10</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-blue/10 to-blue/5 p-6 sm:p-8 rounded-lg border border-blue/30 text-center"
            >
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-blue mx-auto mb-3 sm:mb-4" />
              <div className="font-display text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-2">
                99 Marks
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Certificate III in IT</p>
              <p className="text-blue font-medium mt-1 sm:mt-2 text-sm sm:text-base">Higher Distinction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-navy/10 to-navy/5 p-6 sm:p-8 rounded-lg border border-navy/30 text-center"
            >
              <TrendingUp className="w-10 h-10 sm:w-12 sm:h-12 text-navy dark:text-white mx-auto mb-3 sm:mb-4" />
              <div className="font-display text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-2">
                95 Marks
              </div>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Certificate I in Qira'at</p>
              <p className="text-navy dark:text-white font-medium mt-1 sm:mt-2 text-sm sm:text-base">Higher Distinction</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-grey-soft dark:bg-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white text-center mb-8 sm:mb-12"
          >
            Quick Overview
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: 'Academic Excellence', desc: 'Outstanding O-Level results with National Top 10 achievement', link: '/education' },
              { title: 'Leadership Experience', desc: 'Prefect, Student Council, Media Club President, House Captain', link: '/leadership' },
              { title: 'Technical Skills', desc: 'IT certifications, graphic design, web development basics', link: '/skills' },
              { title: 'Achievements', desc: 'Multiple awards across academics, competitions, and leadership', link: '/achievements' },
              { title: 'Activities', desc: 'Active involvement in school and community activities', link: '/activities' },
              { title: 'Get In Touch', desc: 'Connect for opportunities and collaborations', link: '/contact' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.link}
                  className="block bg-white dark:bg-navy p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gold/30 hover:shadow-lg transition-all"
                >
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-navy dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{item.desc}</p>
                  <span className="text-gold text-xs sm:text-sm font-medium">Learn more →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
