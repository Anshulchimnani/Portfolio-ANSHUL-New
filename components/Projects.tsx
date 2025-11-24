'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Healthcare Insights',
      description: 'Predictive modeling for insurance holders out-of-pocket price prediction using advanced Machine Learning algorithms. Achieved high accuracy in cost estimation.',
      tags: ['Machine Learning', 'Python', 'Scikit-learn', 'Predictive Modeling'],
      github: 'https://github.com/Anshulchimnani/healthcare_insight',
      featured: true,
    },
    {
      title: 'CO2 Emissions Analysis',
      description: 'Comprehensive statistical analysis and linear regression modeling to predict CO2 emissions. Implemented SGD Regressor for optimized performance.',
      tags: ['Linear Regression', 'Statistical Analysis', 'Python', 'Data Visualization'],
      github: 'https://github.com/Anshulchimnani/Linear-Regression-of-CO2-Emissions-using-python',
      featured: true,
    },
    {
      title: 'Irish Tourism Web Scraper',
      description: 'Automated web scraping solution for Irish tourist destinations using BeautifulSoup and geopy. Includes geographic coordinate mapping and data extraction pipeline.',
      tags: ['Web Scraping', 'BeautifulSoup', 'Python', 'Data Engineering'],
      github: 'https://github.com/Anshulchimnani/Webscrapping-data-from-a-website',
      featured: true,
    },
    {
      title: 'Sentiment Analysis App',
      description: 'Full-stack Django application deployed on Heroku for real-time sentiment classification. Features a user-friendly interface for text analysis.',
      tags: ['NLP', 'Django', 'Heroku', 'Sentiment Analysis'],
      github: 'https://github.com/Anshulchimnani/Sentiment-analysis-app',
      featured: false,
    },
    {
      title: 'Wine Description Word Cloud',
      description: 'Text analysis and visualization project identifying frequently used terminology in wine descriptions. Beautiful data visualization using word clouds.',
      tags: ['NLP', 'Data Visualization', 'Python', 'Text Mining'],
      github: 'https://github.com/Anshulchimnani/Word-Cloud',
      featured: false,
    },
    {
      title: 'Statistical CO2 Dashboard',
      description: 'Interactive dashboard showcasing comprehensive statistical analysis of CO2 emissions data with multiple visualization techniques.',
      tags: ['Dashboard', 'Data Visualization', 'Statistical Analysis', 'Python'],
      github: 'https://github.com/Anshulchimnani/Statistical-Analysis-of-CO2-Emissions',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of projects demonstrating expertise in data analysis, machine learning, and engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-effect rounded-lg p-6 hover:bg-white/10 transition-all duration-300 group ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {project.featured && (
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4">
                  Featured
                </span>
              )}

              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FiGithub size={20} />
                  <span className="text-sm">Code</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Anshulchimnani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-effect hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
          >
            <FiGithub size={20} />
            <span>View All Projects on GitHub</span>
            <FiExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
