import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ResumeContainer = styled.div`
  min-height: 100vh;
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const ResumeContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ResumeHeader = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
  text-align: center;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 1.3rem;
  color: #00d4aa;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.name === 'dark' ? '#cbd5e0' : '#4a5568'};
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.name === 'dark' ? '#cbd5e0' : '#4a5568'};
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #00d4aa;
  }
`;

const DownloadButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #00d4aa 0%, #00b4d8 100%);
  color: #0a0a0a;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #00b894 0%, #0099cc 100%);
  }
`;

const ResumeSection = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #00d4aa;
  margin-bottom: 20px;
  border-bottom: 2px solid #00d4aa;
  padding-bottom: 10px;
`;

const ExperienceItem = styled.div`
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 5px;
  }
`;

const JobTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Company = styled.h5`
  font-size: 1rem;
  color: #00d4aa;
  font-weight: 500;
`;

const DateRange = styled.span`
  color: ${({ theme }) => theme.name === 'dark' ? '#cbd5e0' : '#4a5568'};
  font-size: 0.9rem;
  font-weight: 500;
`;

const ExperienceDescription = styled.p`
  color: ${({ theme }) => theme.name === 'dark' ? '#cbd5e0' : '#4a5568'};
  line-height: 1.6;
  margin-bottom: 10px;
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  color: ${({ theme }) => theme.name === 'dark' ? '#cbd5e0' : '#4a5568'};
  line-height: 1.6;
  margin-bottom: 5px;
  padding-left: 20px;
  position: relative;
  
  &::before {
    content: '•';
    color: #00d4aa;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const SkillCategory = styled.div``;

const SkillCategoryTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillTag = styled.span`
  background-color: ${({ theme }) => theme.name === 'dark' ? '#2d3748' : '#f1f5f9'};
  color: ${({ theme }) => theme.name === 'dark' ? '#e2e8f0' : '#2d3748'};
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.name === 'dark' ? '#4a5568' : '#e2e8f0'};
`;

const EducationItem = styled.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Degree = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 5px;
`;

const School = styled.h5`
  font-size: 1rem;
  color: #00d4aa;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Resume: React.FC = () => {
  const experiences = [
    {
      title: 'Software Developer Engineer Intern',
      company: 'Amazon.com, Inc',
      date: 'May 2025 - August 2025',
      description: 'Developed LLM-based AR makeup system and re-architected 3D rendering engine for product visualization.',
      achievements: [
        'Developed LLM-based AR makeup system enabling real-time virtual try-on and personalized cosmetic recommendations',
        'Re-architected Amazon\'s core 3D rendering engine supporting 490K+ daily product page views',
        'Achieved 9% increase in session time and 6.2% reduce in return rate through enhanced rendering fidelity and performance',
        'Authored QA plans adopted by 3+ teams, reducing validation time 40% and supporting stable production release'
      ]
    },
    {
      title: 'Executive and Technology Leader',
      company: 'University of Southern California',
      date: 'January 2024 - November 2024',
      description: 'Led development of AI-powered conversation systems and web applications.',
      achievements: [
        'Built a block-based AI conversation system with Vue.js, TypeScript, and AWS Lambda, enabling cross-interface memory sharing',
        'Designed and implemented web-app using AWS services (Lambda, DynamoDB, API Gateway) for real-time chat processing',
        'Led development of modular microservices architecture integrating multiple AI capabilities for conversation management'
      ]
    },
    {
      title: 'Systems Developer',
      company: 'The Ohio State University',
      date: 'March 2023 - January 2024',
      description: 'Developed and deployed machine learning models and optimized lab workflows.',
      achievements: [
        'Deployed image recognition model on AWS, utilizing TensorFlow for model training, Docker for containerization',
        'Developed algorithms for optimized lab workflows using Cloud Compute Engine for high-performance computing',
        'Rewarded for Graduation with Research Distinction in Physics'
      ]
    },
    {
      title: 'Data Scientist Intern',
      company: 'SGS S.A.',
      date: 'August 2020 - December 2020',
      description: 'Developed automation systems and mobile applications for QR code recognition.',
      achievements: [
        'Developed an Excel-based automation system, cutting customer order processing time from 1 hour to 3 minutes',
        'Deployed YOLOv5 on mobile for QR code recognition and order placement, cutting 200-sample purchase time to 5 minutes'
      ]
    }
  ];

  const skills = {
    'Programming Languages': ['Java', 'Python', 'C/C++', 'C#', 'Lua', 'R'],
    'Web Technologies': ['CSS', 'HTML', 'JavaScript', 'Vue.js'],
    'Tools & Frameworks': ['Git', 'PyTorch', 'TensorFlow', 'Docker'],
    'Cloud & Database': ['AWS', 'NoSQL', 'MySQL']
  };

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University of Southern California',
      date: 'January 2024 - December 2025'
    },
    {
      degree: 'Bachelor of Science in Physics',
      school: 'The Ohio State University',
      date: 'September 2019 - May 2023'
    }
  ];

  return (
    <ResumeContainer>
      <ResumeContent>
        <ResumeHeader
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Name>XUANZHI ZHANG</Name>
          <Title>Ex-Amazon Intern</Title>
          
          <ContactInfo>
            <ContactItem>
              <FaEnvelope />
              <span>zhangxuanzhi10419@gmail.com</span>
            </ContactItem>
          </ContactInfo>
          
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/xuanzhi-zhang/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="https://github.com/Dr-Banana" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
          </SocialLinks>
          
          <DownloadButton
            href="/assets/Xuanzhi Zhang.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <FaDownload />
            Download PDF Resume
          </DownloadButton>
        </ResumeHeader>

        <ResumeSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <SectionTitle>Professional Experience</SectionTitle>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index}>
              <ExperienceHeader>
                <div>
                  <JobTitle>{exp.title}</JobTitle>
                  <Company>{exp.company}</Company>
                </div>
                <DateRange>{exp.date}</DateRange>
              </ExperienceHeader>
              <ExperienceDescription>{exp.description}</ExperienceDescription>
              <AchievementList>
                {exp.achievements.map((achievement, idx) => (
                  <AchievementItem key={idx}>{achievement}</AchievementItem>
                ))}
              </AchievementList>
            </ExperienceItem>
          ))}
        </ResumeSection>

        <ResumeSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SectionTitle>Technical Skills</SectionTitle>
          <SkillsGrid>
            {Object.entries(skills).map(([category, skillList]) => (
              <SkillCategory key={category}>
                <SkillCategoryTitle>{category}</SkillCategoryTitle>
                <SkillList>
                  {skillList.map((skill) => (
                    <SkillTag key={skill}>{skill}</SkillTag>
                  ))}
                </SkillList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </ResumeSection>

        <ResumeSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SectionTitle>Certifications</SectionTitle>
          <EducationItem>
            <Degree>AWS Certified Developer – Associate</Degree>
            <School>Amazon Web Services (AWS)</School>
            <DateRange>2025</DateRange>
          </EducationItem>
        </ResumeSection>

        <ResumeSection
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, index) => (
            <EducationItem key={index}>
              <Degree>{edu.degree}</Degree>
              <School>{edu.school}</School>
              <DateRange>{edu.date}</DateRange>
            </EducationItem>
          ))}
        </ResumeSection>
      </ResumeContent>
    </ResumeContainer>
  );
};

export default Resume; 