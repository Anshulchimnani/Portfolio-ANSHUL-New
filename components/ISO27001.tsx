'use client';

import { motion } from 'framer-motion';
import { FiShield, FiLock, FiCheckCircle, FiFileText } from 'react-icons/fi';

const ISO27001 = () => {
  const isoComponents = [
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Information Security Management',
      description: 'Implementing comprehensive ISMS frameworks to protect organizational data assets and ensure confidentiality, integrity, and availability.',
    },
    {
      icon: <FiLock className="w-8 h-8" />,
      title: 'Risk Assessment & Mitigation',
      description: 'Conducting thorough risk assessments to identify vulnerabilities and implementing appropriate controls to minimize security risks.',
    },
    {
      icon: <FiCheckCircle className="w-8 h-8" />,
      title: 'Compliance & Auditing',
      description: 'Ensuring adherence to ISO 27001 standards through regular audits, documentation, and continuous improvement processes.',
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: 'Policy Development',
      description: 'Creating and maintaining security policies, procedures, and documentation aligned with ISO 27001 requirements.',
    },
  ];

  const keyAreas = [
    'Information Security Policies',
    'Asset Management',
    'Access Control',
    'Cryptography',
    'Physical Security',
    'Operations Security',
    'Communications Security',
    'System Acquisition & Development',
    'Supplier Relationships',
    'Incident Management',
    'Business Continuity',
    'Compliance Management',
  ];

  return (
    <section id="iso27001" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ISO 27001 <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Specialized knowledge in implementing and maintaining Information Security Management Systems
            in compliance with international standards
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-lg p-8 mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">What is ISO 27001?</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            ISO 27001 is the international standard for Information Security Management Systems (ISMS).
            It provides a systematic approach to managing sensitive company information, ensuring it remains secure
            through people, processes, and technology controls.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My expertise in ISO 27001 enables organizations to protect their information assets, demonstrate
            compliance to stakeholders, and build trust with customers through robust security practices.
          </p>
        </motion.div>

        {/* Core Components */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {isoComponents.map((component, index) => (
            <motion.div
              key={component.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">{component.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{component.title}</h3>
              <p className="text-gray-400 leading-relaxed">{component.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Control Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-effect rounded-lg p-8"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">ISO 27001 Control Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {keyAreas.map((area, index) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                <FiCheckCircle className="text-green-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{area}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4">How I Can Help</h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I bring together technical expertise in data security and practical knowledge of ISO 27001
            requirements to help organizations establish, implement, and maintain effective information
            security management systems. From initial gap analysis to ongoing compliance monitoring,
            I ensure your data practices meet international security standards.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ISO27001;
