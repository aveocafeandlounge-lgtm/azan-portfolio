import { motion } from 'framer-motion';
import { User, Heart, Target, Zap } from 'lucide-react';
import { profile } from '../data/profile';
import { education } from '../data/education';
import { Timeline } from '../components/Timeline';

export function About() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4 sm:mb-6">
            About Me
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-4xl leading-relaxed">
            {profile.biography}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8">
            Personal Qualities
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4">
            {profile.personalQualities.map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-navy-light p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                </div>
                <span className="font-medium text-navy dark:text-white text-xs sm:text-sm">{quality}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8">
            My Journey
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 p-4 sm:p-6 rounded-lg border border-gold/30 text-center">
              <User className="w-10 h-10 sm:w-12 sm:h-12 text-gold mx-auto mb-3 sm:mb-4" />
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy dark:text-white mb-2">
                Primary Education
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">2014–2021</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">LHAEC, Lh. Hinnavaru</p>
            </div>
            <div className="bg-gradient-to-br from-blue/10 to-blue/5 p-4 sm:p-6 rounded-lg border border-blue/30 text-center">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-blue mx-auto mb-3 sm:mb-4" />
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy dark:text-white mb-2">
                Secondary Education
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">2022–2024</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">Ahmadhiyya International School</p>
            </div>
            <div className="bg-gradient-to-br from-navy/10 to-navy/5 p-4 sm:p-6 rounded-lg border border-navy/30 text-center">
              <Zap className="w-10 h-10 sm:w-12 sm:h-12 text-navy dark:text-white mx-auto mb-3 sm:mb-4" />
              <h3 className="font-display text-lg sm:text-xl font-semibold text-navy dark:text-white mb-2">
                Higher Secondary
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">2024–2026</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">Ahmadhiyya International School</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8">
            Educational Timeline
          </h2>
          <Timeline items={education.journey.map(item => ({ ...item, title: item.level }))} />
        </motion.div>
      </div>
    </div>
  );
}
