import { motion } from 'framer-motion';
import { Code, Users, Monitor, FileText, Image, Video, Keyboard } from 'lucide-react';
import { skills } from '../data/skills';
import { SkillCard } from '../components/SkillCard';

const iconMap: Record<string, React.ReactNode> = {
  'Word': <FileText className="w-5 h-5" />,
  'Excel': <FileText className="w-5 h-5" />,
  'PowerPoint': <FileText className="w-5 h-5" />,
  'Docs': <FileText className="w-5 h-5" />,
  'Sheets': <FileText className="w-5 h-5" />,
  'Slides': <FileText className="w-5 h-5" />,
  'HTML': <Code className="w-5 h-5" />,
  'CSS': <Code className="w-5 h-5" />,
  'Graphic Design (Canva)': <Image className="w-5 h-5" />,
  'Video Editing (CapCut)': <Video className="w-5 h-5" />,
  'Typing': <Keyboard className="w-5 h-5" />,
};

export function Skills() {
  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4">
            Technical & Personal Skills
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            A comprehensive set of technical abilities and interpersonal skills developed through education and experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            Hard Skills
          </h2>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-navy dark:text-white mb-3 sm:mb-4">Microsoft Office</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {skills.hard.microsoftOffice.map((skill, index) => (
                  <SkillCard
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    icon={iconMap[skill.name]}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-navy dark:text-white mb-3 sm:mb-4">Google Workspace</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {skills.hard.googleWorkspace.map((skill, index) => (
                  <SkillCard
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    icon={iconMap[skill.name]}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-navy dark:text-white mb-3 sm:mb-4">Technical Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {skills.hard.technical.map((skill, index) => (
                  <SkillCard
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    icon={iconMap[skill.name]}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            Soft Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {skills.soft.map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
