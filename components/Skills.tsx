'use client';

import { motion } from 'framer-motion';
import {
  SiPython,
  SiJupyter,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiTableau,
  SiPowerbi,
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Analysis & ML',
      skills: [
        { name: 'Python', icon: <SiPython className="w-8 h-8" />, color: '#3776AB' },
        { name: 'Scikit-learn', icon: <SiScikitlearn className="w-8 h-8" />, color: '#F7931E' },
        { name: 'Pandas', icon: <SiPandas className="w-8 h-8" />, color: '#150458' },
        { name: 'NumPy', icon: <SiNumpy className="w-8 h-8" />, color: '#013243' },
        { name: 'Jupyter', icon: <SiJupyter className="w-8 h-8" />, color: '#F37626' },
      ],
    },
    {
      title: 'Data Engineering',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" />, color: '#4169E1' },
        { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, color: '#47A248' },
        { name: 'Django', icon: <SiDjango className="w-8 h-8" />, color: '#092E20' },
        { name: 'Docker', icon: <SiDocker className="w-8 h-8" />, color: '#2496ED' },
        { name: 'Git', icon: <SiGit className="w-8 h-8" />, color: '#F05032' },
      ],
    },
    {
      title: 'Visualization & BI',
      skills: [
        { name: 'Tableau', icon: <SiTableau className="w-8 h-8" />, color: '#E97627' },
        { name: 'Power BI', icon: <SiPowerbi className="w-8 h-8" />, color: '#F2C811' },
      ],
    },
  ];

  const expertiseAreas = [
    'Statistical Analysis',
    'Machine Learning',
    'Data Visualization',
    'Predictive Modeling',
    'Web Scraping',
    'Natural Language Processing',
    'Time Series Analysis',
    'A/B Testing',
    'Data Pipeline Development',
    'ETL Processes',
    'ISO 27001 Compliance',
    'Information Security',
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for turning data into insights and building scalable solutions
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                  >
                    <div style={{ color: skill.color }}>{skill.icon}</div>
                    <span className="text-sm mt-2 text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Expertise Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseAreas.map((area, index) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 glass-effect rounded-full text-sm hover:bg-white/10 transition-all duration-200 cursor-default"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
