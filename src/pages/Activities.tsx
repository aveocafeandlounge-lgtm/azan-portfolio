import { motion } from 'framer-motion';
import { Heart, Calendar, Users } from 'lucide-react';
import { activities } from '../data/activities';

export function Activities() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4">
            Volunteering & Activities
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Active involvement in school activities, community service, and personal development programs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-navy-light rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gold/30 transition-all overflow-hidden"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 sm:h-56 object-cover object-top"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-navy dark:text-white mb-2">
                        {activity.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-blue dark:text-blue-light mb-1 sm:mb-2">
                        <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>{activity.period}</span>
                      </div>
                      <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                        {activity.institution}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                        {activity.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-br from-navy/10 to-navy/5 p-6 sm:p-8 rounded-lg border border-navy/30">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-navy dark:text-white" />
              <h3 className="font-display text-xl sm:text-2xl font-bold text-navy dark:text-white">
                Commitment to Community
              </h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Through these activities, I have developed strong teamwork skills, a sense of responsibility,
              and a commitment to serving my school and community. Each experience has contributed to my personal
              growth and leadership development.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
