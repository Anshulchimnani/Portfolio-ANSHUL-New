'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/anshul-chimnani-2b8384134/',
      color: 'hover:text-blue-400',
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      title: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/Anshulchimnani',
      color: 'hover:text-purple-400',
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Dublin, Ireland',
      link: null,
      color: 'hover:text-green-400',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {method.link ? (
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block glass-effect rounded-lg p-6 hover:bg-white/10 transition-all duration-300 ${method.color} group`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="text-gray-400 group-hover:scale-110 transition-transform duration-200 mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-gray-400">{method.value}</p>
                  </div>
                </a>
              ) : (
                <div className="glass-effect rounded-lg p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="text-gray-400 mb-4">{method.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-gray-400">{method.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center glass-effect rounded-lg p-12"
        >
          <h3 className="text-3xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Whether you're looking for data analysis expertise, machine learning solutions,
            or ISO 27001 compliance support, I'd love to hear about your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/anshul-chimnani-2b8384134/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              <FiLinkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
            <a
              href="https://github.com/Anshulchimnani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 glass-effect hover:bg-white/10 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              <FiGithub size={20} />
              <span>View GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-20 pt-8 border-t border-white/10 text-center text-gray-400"
      >
        <p className="mb-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
        <p>&copy; {new Date().getFullYear()} Anshul Chimnani. All rights reserved.</p>
      </motion.footer>
    </section>
  );
};

export default Contact;
