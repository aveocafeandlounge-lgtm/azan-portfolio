import { motion } from 'framer-motion';
import { Users, Briefcase, Shield } from 'lucide-react';
import { Timeline } from '../components/Timeline';

export function Leadership() {
  const leadershipItems = [
    {
      title: "Prefect",
      institution: "Ahmadhiyya International School",
      period: "Grades 7, 8, 9, 10, 11 and 12",
      description: "Served as a prefect for six consecutive years, demonstrating consistent leadership and responsibility."
    },
    {
      title: "Student Council Member",
      institution: "Ahmadhiyya International School",
      period: "2024 (Secondary), 2026 (Higher Secondary)",
      description: "Active member of both Secondary and Higher Secondary Student Council, contributing to student governance and school initiatives."
    },
    {
      title: "Media Club President",
      institution: "Ahmadhiyya International School",
      period: "Grade 9",
      description: "Led the Media Club, organizing school media activities and developing leadership skills in creative projects."
    },
    {
      title: "House Captain",
      institution: "Ahmadhiyya International School",
      period: "Grade 12 — Chaandhanee House",
      description: "Captain of Chaandhanee House, leading house activities and fostering team spirit among students."
    }
  ];

  const experienceItems = [
    {
      title: "ADK Cardiac Workshop 2025",
      institution: "ADK Hospital",
      period: "2025",
      description: "Participated in cardiac workshop, gaining valuable medical knowledge and experience."
    },
    {
      title: "Elections Commission Official",
      institution: "Elections Commission of Maldives",
      period: "2026",
      description: "Served as an official for LCE, WDCE & Public Referendum 2026, contributing to the democratic process."
    }
  ];

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4">
            Leadership & Experience
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Proven leadership experience through school roles and professional involvement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            School Leadership Roles
          </h2>
          <Timeline items={leadershipItems} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            Professional Experience
          </h2>
          <Timeline items={experienceItems} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gold" />
            Leadership Summary
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { title: "6 Years", desc: "Prefect Service" },
              { title: "2 Terms", desc: "Student Council" },
              { title: "President", desc: "Media Club" },
              { title: "Captain", desc: "House Captain" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gold/10 to-gold/5 p-4 sm:p-6 rounded-lg border border-gold/30 text-center"
              >
                <div className="font-display text-2xl sm:text-3xl font-bold text-navy dark:text-white mb-1 sm:mb-2">
                  {item.title}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
