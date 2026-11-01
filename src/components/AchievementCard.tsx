import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface AchievementCardProps {
  title: string;
  position?: string;
  details?: string;
  category: string;
  year: string;
  highlight?: boolean;
  image?: string;
}

export function AchievementCard({
  title,
  position,
  details,
  category,
  year,
  highlight = false,
  image
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`relative rounded-lg border transition-all overflow-hidden ${
        highlight
          ? 'bg-gradient-to-br from-gold/10 to-gold/5 border-gold/30 shadow-lg'
          : 'bg-white dark:bg-navy-light border-gray-200 dark:border-gray-800 hover:border-gold/30'
      }`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover object-top"
        />
      )}
      <div className="p-6">
        {highlight && !image && (
          <div className="absolute top-4 right-4">
            <Award className="w-5 h-5 text-gold" />
          </div>
        )}
        <div className="space-y-2">
          <span className="text-xs font-medium text-blue dark:text-blue-light uppercase tracking-wider">
            {category}
          </span>
          <h3 className="font-display text-lg font-semibold text-navy dark:text-white">
            {title}
          </h3>
          {position && (
            <p className="text-gold font-medium text-sm">{position}</p>
          )}
          {details && (
            <p className="text-gray-600 dark:text-gray-300 text-sm">{details}</p>
          )}
          <span className="text-xs text-gray-500 dark:text-gray-400">{year}</span>
        </div>
      </div>
    </motion.div>
  );
}
