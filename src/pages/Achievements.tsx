import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Filter } from 'lucide-react';
import { achievements } from '../data/achievements';
import { AchievementCard } from '../components/AchievementCard';

const categories = ['All', 'Academic', 'Technical', 'Quran', 'Leadership', 'Competitions', 'Language'];

export function Achievements() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const allAchievements = [
    ...achievements.major.map(a => ({ ...a, highlight: true })),
    ...achievements.primary,
    ...achievements.secondary,
    ...achievements.higherSecondary,
    ...achievements.academic,
    ...achievements.competitions
  ];

  const filteredAchievements = selectedCategory === 'All'
    ? allAchievements
    : allAchievements.filter(a => a.category === selectedCategory);

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4 flex items-center gap-2 sm:gap-3">
            <Award className="w-8 h-8 sm:w-10 sm:h-10 text-gold" />
            Awards & Achievements
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A collection of academic, leadership, and extracurricular achievements throughout my educational journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-navy dark:text-white" />
            <span className="font-medium text-navy dark:text-white text-sm sm:text-base">Filter by Category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gold text-white'
                    : 'bg-white dark:bg-navy-light text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 hover:border-gold/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="font-display text-xl sm:text-2xl font-bold text-navy dark:text-white mb-4 sm:mb-6">
            Major Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {achievements.major.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                position={achievement.position}
                details={achievement.details}
                category={achievement.category}
                year={achievement.year}
                highlight={true}
                image={achievement.image}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-xl sm:text-2xl font-bold text-navy dark:text-white mb-4 sm:mb-6">
            All Achievements
            <span className="text-base sm:text-lg font-normal text-gray-500 dark:text-gray-400 ml-2">
              ({filteredAchievements.length})
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredAchievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                title={achievement.title}
                position={achievement.position}
                details={achievement.details}
                category={achievement.category}
                year={achievement.year}
                highlight={achievement.highlight}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
