import { motion } from 'framer-motion';
import { ArrowLeft, Printer, Mail, Phone, MapPin, Award, Briefcase, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CV() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm;
          }
          
          body {
            background: white !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .no-print {
            display: none !important;
          }
          
          .cv-container {
            max-width: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
          }
          
          .cv-sidebar {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
      
      <div className="pt-16 pb-16 bg-gray-100 dark:bg-navy min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 no-print"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-navy dark:text-white hover:text-gold dark:hover:text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Back to Home
            </Link>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-navy dark:bg-white text-white dark:text-navy rounded-lg hover:bg-navy-light dark:hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base"
            >
              <Printer className="w-4 h-4 sm:w-5 sm:h-5" />
              Print / Save as PDF
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="cv-container bg-white dark:bg-navy-light rounded-lg shadow-2xl overflow-hidden"
          >
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr]">
            {/* Sidebar */}
            <aside className="cv-sidebar bg-navy text-white p-6 sm:p-8">
              <div className="mb-8">
                <img
                  src="/images/viber_image_2026-10-19_22-39-43-227.jpg"
                  alt="Mohamed Azan Abdul Rahman"
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover object-top border-4 border-gold/30 mx-auto mb-6"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-gold text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-gold/30">
                    Contact
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                      <span className="break-all">mohamed.azan.ar@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-gold" />
                      <span>+960 9303223</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                      <span>Ma. Dhanas, Malé, Maldives</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-gold text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-gold/30">
                    Education
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="font-semibold">Higher Secondary</div>
                      <div className="text-gray-300">Ahmadhiyya International School</div>
                      <div className="text-gray-400 text-xs">2024 – 2026</div>
                    </div>
                    <div>
                      <div className="font-semibold">Secondary Education</div>
                      <div className="text-gray-300">Ahmadhiyya International School</div>
                      <div className="text-gray-400 text-xs">2022 – 2024</div>
                    </div>
                    <div>
                      <div className="font-semibold">Primary Education</div>
                      <div className="text-gray-300">LHAEC, Lh. Hinnavaru</div>
                      <div className="text-gray-400 text-xs">2014 – 2021</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-gold text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-gold/30">
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Microsoft Word', 'Excel', 'PowerPoint', 'Google Workspace', 'HTML', 'CSS', 'Canva', 'CapCut', 'Graphic Design', 'Web Development', 'Typing 50+ WPM'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gold/20 text-gold-light text-xs rounded-full border border-gold/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-gold text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-gold/30">
                    Core Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Leadership', 'Communication', 'Teamwork', 'Problem Solving', 'Critical Thinking', 'Creativity', 'Time Management', 'Collaboration'].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue/20 text-blue-light text-xs rounded-full border border-blue/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-gold text-sm font-bold uppercase tracking-wider mb-4 pb-2 border-b border-gold/30">
                    Certifications
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-semibold">Certificate III in IT</div>
                      <div className="text-gray-300">Higher Distinction – 99 marks</div>
                    </div>
                    <div>
                      <div className="font-semibold">Certificate I in Qira'at</div>
                      <div className="text-gray-300">Higher Distinction – 95 marks, 12 credits</div>
                    </div>
                    <div>
                      <div className="font-semibold">YLE Flyers</div>
                      <div className="text-gray-300">Graduate</div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="p-6 sm:p-8 bg-white dark:bg-navy-light">
              <div className="mb-8">
                <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy dark:text-white mb-2">
                  MOHAMED AZAN<br />
                  <span className="text-gold">ABDUL RAHMAN</span>
                </h1>
                <p className="text-blue dark:text-blue-light font-medium text-sm sm:text-base uppercase tracking-wider">
                  Student Leader | IT Enthusiast
                </p>
              </div>

              <section className="mb-8">
                <h2 className="font-display text-lg sm:text-xl font-bold text-navy dark:text-white mb-4 pb-2 border-b-2 border-gold">
                  Professional Profile
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
                  A high-achieving student and experienced school leader with a strong academic record, including 7 A*s and 1 A in O-Level examinations and second place in the National Top 10. Demonstrates leadership through years of prefect service, student council participation, Media Club presidency and House Captain responsibilities. Skilled in communication, teamwork, critical thinking, IT, graphic design and web development. Motivated to learn, contribute and take on new challenges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-lg sm:text-xl font-bold text-navy dark:text-white mb-4 pb-2 border-b-2 border-gold flex items-center gap-2">
                  <Award className="w-5 h-5 text-gold" />
                  Key Achievement
                </h2>
                <div className="bg-gradient-to-r from-gold/10 to-gold/5 p-4 rounded-lg border border-gold/30">
                  <div className="font-semibold text-navy dark:text-white text-sm sm:text-base">
                    National Top 10 – O-Level Examination
                  </div>
                  <div className="text-gold font-medium text-xs sm:text-sm">
                    2nd Place | 7 A*s and 1 A
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1">
                    Recognised among the highest-achieving students nationally.
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-lg sm:text-xl font-bold text-navy dark:text-white mb-4 pb-2 border-b-2 border-gold flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-gold" />
                  Leadership & Experience
                </h2>
                <div className="space-y-4">
                  {[
                    { title: 'Student Prefect', org: 'Ahmadhiyya International School', period: 'Grades 7–12', desc: 'Served as a prefect throughout secondary and higher secondary education, supporting school activities, discipline and student leadership.' },
                    { title: 'Student Council Member', org: 'AIS Student Council', period: '2024', desc: 'Participated in student representation and school activities.' },
                    { title: 'Higher Secondary Student Council', org: 'Ahmadhiyya International School', period: '2026', desc: '' },
                    { title: 'Media Club President', org: '', period: 'Grade 9', desc: '' },
                    { title: 'Chaandhanee House Captain', org: '', period: 'Grade 12', desc: 'Led house activities, coordinated participation and supported students in inter-house competitions.' },
                    { title: 'Election Official', org: 'Elections Commission', period: '2026', desc: 'Served in LCE, WDCE and Public Referendum activities.' },
                    { title: 'ADK Cardiac Workshop', org: '', period: '2025', desc: '' },
                  ].map((item, index) => (
                    <div key={index} className="border-l-2 border-gold/30 pl-4">
                      <div className="font-semibold text-navy dark:text-white text-sm sm:text-base">{item.title}</div>
                      <div className="text-blue dark:text-blue-light text-xs sm:text-sm font-medium">{item.org} {item.period && `| ${item.period}`}</div>
                      {item.desc && <div className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mt-1">{item.desc}</div>}
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h2 className="font-display text-lg sm:text-xl font-bold text-navy dark:text-white mb-4 pb-2 border-b-2 border-gold flex items-center gap-2">
                  <Award className="w-5 h-5 text-gold" />
                  Awards & Recognition
                </h2>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-3">Academic Achievements</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• National Top 10 O-Level – 2nd Place (7 A*s, 1 A)</li>
                    <li>• High Achievers' Award – 2024</li>
                    <li>• Class Prize – Grade 11F, Prize Day 2025</li>
                    <li>• Honour Listed – Grade 11</li>
                    <li>• Subject Prizes – Islamic Studies and Biology</li>
                    <li>• Certificate III IT – Higher Distinction, 99 marks</li>
                    <li>• Certificate I Qira'at – Higher Distinction, 95 marks</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-3">School & House Activities</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• HIYA Eid 2025: 1st place in Majalla Hedhun, Keun Thayyaaru Kurun and Stall Farumaa Kurun</li>
                    <li>• HIYA Eid 2025: 3rd place in Bahabaru and Drama; Overall HIYA Eid 2nd place</li>
                    <li>• Travel & Tourism Fest 2025 – Special Award for Food Stall, Higher Secondary</li>
                    <li>• 2026 House competitions: 1st place in Vaadha Raivaru, Dance, Stall Making and Boys' Volleyball</li>
                    <li>• 2026 House competitions: 2nd place in Group Madhaha, Mazumoonu, Typing, Creative Writing, Drama, Drama Props and Video Ah Adu Elhun</li>
                    <li>• 2026 House competitions: 3rd place in Aela Poetry Poster, Basthoora, Vaahaka, Quiz and other events</li>
                    <li>• Overall HIYA Eid 2026 – 2nd Place</li>
                    <li>• Overall House 2026 – 3rd Place</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gold text-sm uppercase tracking-wider mb-3">Other Recognition</h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <li>• YLE Flyers – 2nd place in final examination, 2018</li>
                    <li>• YLE Flyers – 3rd place in mock examination</li>
                    <li>• Quran competition and IHYA Quran Class placements</li>
                    <li>• Discipline Award, class prizes and subject distinctions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="font-display text-lg sm:text-xl font-bold text-navy dark:text-white mb-4 pb-2 border-b-2 border-gold flex items-center gap-2">
                  <Code className="w-5 h-5 text-gold" />
                  Volunteering & Activities
                </h2>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>• AIS Higher Secondary Ice Cream Day – 2024</li>
                  <li>• AIS TT Fest – 2025</li>
                  <li>• Traffic Monitor – 2021–2022</li>
                  <li>• Cub Scouts – 2012–2018</li>
                </ul>
              </section>
            </main>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
