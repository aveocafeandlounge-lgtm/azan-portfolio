import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { education } from '../data/education';
import { achievements } from '../data/achievements';
import { Timeline } from '../components/Timeline';
import { AchievementCard } from '../components/AchievementCard';

export function Education() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4">
            Academic Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A commitment to excellence in education from primary through higher secondary studies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            Educational Timeline
          </h2>
          <Timeline items={education.journey.map(item => ({ ...item, title: item.level }))} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            Professional Qualifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {education.qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gold/10 to-gold/5 p-4 sm:p-6 rounded-lg border border-gold/30"
              >
                <h3 className="font-display text-lg sm:text-xl font-semibold text-navy dark:text-white mb-2">
                  {qual.name}
                </h3>
                <p className="text-gold font-medium mb-1 sm:mb-2 text-sm sm:text-base">{qual.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">{qual.details}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-2">{qual.year}</p>
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
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            O-Level Achievement
          </h2>
          <div className="bg-gradient-to-br from-navy/10 to-navy/5 p-6 sm:p-8 rounded-lg border border-navy/30 text-center">
            <div className="font-display text-4xl sm:text-5xl font-bold text-navy dark:text-white mb-3 sm:mb-4">
              7 A*s & 1 A
            </div>
            <p className="text-gold text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              2nd Place — National Top 10
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Outstanding performance across all subjects with distinction in multiple areas
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8">
            Academic Recognition
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {achievements.academic.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                category={achievement.category}
                year={achievement.year}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
