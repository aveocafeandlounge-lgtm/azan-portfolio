import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Copy, Check } from 'lucide-react';
import { profile } from '../data/profile';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${profile.contact.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 sm:mb-16"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Feel free to reach out for opportunities, collaborations, or just to say hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-xl sm:text-2xl font-bold text-navy dark:text-white mb-4 sm:mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white dark:bg-navy-light p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-navy dark:text-white font-medium hover:text-gold transition-colors text-sm sm:text-base truncate"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex-shrink-0"
                    aria-label="Copy email"
                  >
                    {copied ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" /> : <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />}
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-navy-light p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Phone</p>
                    <a
                      href={`tel:${profile.contact.phone}`}
                      className="text-navy dark:text-white font-medium hover:text-gold transition-colors text-sm sm:text-base"
                    >
                      {profile.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-navy-light p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">Location</p>
                    <p className="text-navy dark:text-white font-medium text-sm sm:text-base">
                      {profile.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8">
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-navy dark:bg-white text-white dark:text-navy rounded-lg hover:bg-navy-light dark:hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-xl sm:text-2xl font-bold text-navy dark:text-white mb-4 sm:mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-navy-light p-4 sm:p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-navy text-navy dark:text-white focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-navy text-navy dark:text-white focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-navy text-navy dark:text-white focus:outline-none focus:border-gold transition-colors text-sm sm:text-base"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-navy text-navy dark:text-white focus:outline-none focus:border-gold transition-colors resize-none text-sm sm:text-base"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-navy dark:bg-white text-white dark:text-navy rounded-lg hover:bg-navy-light dark:hover:bg-gray-200 transition-colors font-medium text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </button>
              </div>
            </form>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3 sm:mt-4">
              This will open your default email client with the message pre-filled.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
