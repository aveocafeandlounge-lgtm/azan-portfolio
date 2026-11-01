import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineItem {
  title?: string;
  level?: string;
  institution: string;
  period: string;
  description?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-8 border-l-2 border-gold/30"
        >
          <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-gold rounded-full border-4 border-white dark:border-navy" />
          <div className="bg-white dark:bg-navy-light p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-display text-lg font-semibold text-navy dark:text-white">
                {item.title || item.level}
              </h3>
              <span className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                {item.period}
              </span>
            </div>
            <p className="text-blue dark:text-blue-light font-medium mb-2">{item.institution}</p>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
