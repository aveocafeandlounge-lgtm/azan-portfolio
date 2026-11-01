import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  level: string;
  icon?: React.ReactNode;
}

export function SkillCard({ name, level, icon }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-navy-light p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gold/30 transition-all"
    >
      <div className="flex items-center gap-3">
        {icon && <div className="text-gold">{icon}</div>}
        <div className="flex-1">
          <h4 className="font-medium text-navy dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{level}</p>
        </div>
      </div>
    </motion.div>
  );
}
