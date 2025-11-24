'use client';

import { motion } from 'framer-motion';
import { FiAward, FiTarget, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: 'Data-Driven Solutions',
      description: 'Leveraging statistical analysis and machine learning to solve complex business problems',
    },
    {
      icon: <FiTrendingUp className="w-6 h-6" />,
      title: 'Continuous Innovation',
      description: 'Staying at the forefront of data science and engineering best practices',
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'ISO 27001 Expertise',
      description: 'Implementing information security management systems and compliance frameworks',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              Based in <span className="text-blue-400 font-semibold">Dublin, Ireland</span>,
              I am a passionate Data Analyst with a strong foundation in
              <span className="text-blue-400 font-semibold"> Machine Learning</span>,
              <span className="text-purple-400 font-semibold"> Data Engineering</span>, and
              <span className="text-pink-400 font-semibold"> Statistical Analysis</span>.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans building predictive models, developing data pipelines,
              and creating interactive dashboards that drive business decisions. I specialize
              in transforming raw data into meaningful insights through advanced analytics
              and visualization techniques.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a deep understanding of <span className="text-blue-400 font-semibold">ISO 27001</span> standards,
              I ensure that data practices align with information security management best practices,
              helping organizations maintain compliance while maximizing data utility.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I&apos;m not analyzing data, you&apos;ll find me exploring new destinations through trekking
              or enjoying the art of film.
            </p>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-400 mt-1">{highlight.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
