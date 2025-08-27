import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const HomeContainer = styled.div`
  min-height: 100vh;
`;

const HeroSection = styled.section`
  background: ${({ theme }) => theme.name === 'dark' 
    ? 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)'
  };
  color: ${({ theme }) => theme.colors.text};
  padding: 120px 0 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(0, 212, 170, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(0, 180, 216, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(90deg, transparent 98%, rgba(0, 212, 170, 0.1) 100%),
      linear-gradient(180deg, transparent 98%, rgba(0, 212, 170, 0.1) 100%);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
    pointer-events: none;
  }
  
  @keyframes gridMove {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #00d4aa 0%, #00b4d8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::before {
    content: '> ';
    color: #00d4aa;
    -webkit-text-fill-color: #00d4aa;
    animation: blink 1s infinite;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 30px;
  opacity: ${({ theme }) => theme.name === 'dark' ? 0.9 : 0.95};
  color: ${({ theme }) => theme.name === 'dark' ? '#e2e8f0' : '#2d3748'};
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.1rem;
  margin-bottom: 40px;
  opacity: ${({ theme }) => theme.name === 'dark' ? 0.8 : 0.9};
  line-height: 1.6;
  color: ${({ theme }) => theme.name === 'dark' ? '#e2e8f0' : '#2d3748'};
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.name === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 212, 170, 0.1)'};
  color: ${({ theme }) => theme.name === 'dark' ? 'white' : '#1a202c'};
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.name === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 212, 170, 0.3)'};
  
  &:hover {
    background-color: ${({ theme }) => theme.name === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 212, 170, 0.2)'};
    transform: translateY(-2px);
  }
`;

const AboutSection = styled.section`
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutContent = styled.div``;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const AboutText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 30px;
`;

const CodeEditor = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  padding: 20px;
  margin: 20px 0;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: linear-gradient(90deg, #ff5f56 0%, #ffbd2e 50%, #27ca3f 100%);
    border-radius: 12px 12px 0 0;
    margin: -20px -20px 0 -20px;
  }
`;

const CodeLine = styled.div<{ indent?: number }>`
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 8px;
  padding-left: ${({ indent = 0 }) => indent * 20}px;
  color: ${({ theme }) => theme.name === 'dark' ? '#e2e8f0' : '#2d3748'};
  
  &.comment {
    color: ${({ theme }) => theme.name === 'dark' ? '#6b7280' : '#718096'};
  }
  
  &.keyword {
    color: #00d4aa;
  }
  
  &.string {
    color: #fbbf24;
  }
  
  &.function {
    color: #60a5fa;
  }
`;

const AutomationSection = styled.div`
  margin-top: 40px;
`;

const AutomationTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.primary};
`;

const AutomationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

const AutomationCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 25px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, #00d4aa 0%, #00b4d8 100%);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px ${({ theme }) => theme.colors.shadowHover};
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const AutomationIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
  animation: float 3s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
`;

const AutomationCardTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
`;

const AutomationCardText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 0.95rem;
`;



const AboutImage = styled(motion.div)`
  text-align: center;
`;

const ProfileImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 212, 170, 0.3);
  border: 2px solid ${({ theme }) => theme.colors.cardBorder};
`;

const ProfileImageEl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
`;

const Home: React.FC = () => {

  const [imgSrc, setImgSrc] = useState<string>(`${process.env.PUBLIC_URL}/assets/profile_headshot.jpg`);
  const handleImgError = () => {
    // fallback to png if jpg not found
    if (!imgSrc.endsWith('.png')) {
      setImgSrc(`${process.env.PUBLIC_URL}/assets/profile_headshot.png`);
    }
  };

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Xuanzhi Zhang
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ex-Amazon Intern & Computer Science Graduate Student
          </HeroSubtitle>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: '1rem',
              color: '#00d4aa',
              fontFamily: 'monospace',
              marginBottom: '20px',
              opacity: 0.8
            }}
          >
            &gt; Automation Engineer | System Designer | Problem Solver
          </motion.div>
          <HeroDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate about automation, building scalable systems, and creating AI/ML solutions that make life easier. 
            Currently pursuing MS in Computer Science at USC with experience at Amazon.
          </HeroDescription>
          <CTAButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <CTAButton href="/projects">
              <span style={{ fontFamily: 'monospace' }}>./</span> View My Work
            </CTAButton>
            <CTAButton href="/resume">
              <FaDownload />
              <span style={{ fontFamily: 'monospace' }}>download</span> Resume
            </CTAButton>
          </CTAButtons>
        </HeroContent>
      </HeroSection>

      <AboutSection>
        <AboutContainer>
          <AboutContent>
            <SectionTitle
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About Me
            </SectionTitle>
            <AboutText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm a Software Engineer with a strong foundation in Physics and Computer Science. 
              My biggest passion is designing automation systems that make everyday life easier and more efficient.
            </AboutText>
            
            <CodeEditor
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CodeLine className="comment">{'// Automation enthusiast & problem solver'}</CodeLine>
              <CodeLine><span className="keyword">function</span> <span className="function">automateLife</span>() {'{'}</CodeLine>
              <CodeLine indent={1}><span className="keyword">const</span> <span className="string">'dailyTasks'</span> = <span className="string">'optimize'</span>;</CodeLine>
              <CodeLine indent={1}><span className="keyword">const</span> <span className="string">'complexProblems'</span> = <span className="string">'simplify'</span>;</CodeLine>
              <CodeLine indent={1}><span className="keyword">return</span> <span className="string">'efficiency'</span>;</CodeLine>
              <CodeLine>{'}'}</CodeLine>
            </CodeEditor>
            
            <AboutText
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              With experience at Amazon and various research projects, I've developed expertise in 3D rendering, 
              cloud computing, and machine learning. I love turning complex technical challenges into elegant solutions.
            </AboutText>

            <AutomationSection>
              <AutomationTitle>What I Do Best</AutomationTitle>
              <AutomationGrid>
                <AutomationCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <AutomationIcon>🤖</AutomationIcon>
                  <AutomationCardTitle>System Automation</AutomationCardTitle>
                  <AutomationCardText>
                    Design and implement automation solutions that streamline workflows and boost productivity.
                  </AutomationCardText>
                </AutomationCard>

                <AutomationCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <AutomationIcon>⚡</AutomationIcon>
                  <AutomationCardTitle>Performance Optimization</AutomationCardTitle>
                  <AutomationCardText>
                    Optimize systems for speed and efficiency, from rendering engines to data processing pipelines.
                  </AutomationCardText>
                </AutomationCard>

                <AutomationCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <AutomationIcon>🧠</AutomationIcon>
                  <AutomationCardTitle>AI/ML Solutions</AutomationCardTitle>
                  <AutomationCardText>
                    Build intelligent systems that learn and adapt, making complex tasks simple and automated.
                  </AutomationCardText>
                </AutomationCard>
              </AutomationGrid>
            </AutomationSection>
          </AboutContent>

          <AboutImage
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProfileImageWrapper>
              <ProfileImageEl src={imgSrc} alt="Profile headshot" onError={handleImgError} />
            </ProfileImageWrapper>
          </AboutImage>
        </AboutContainer>
      </AboutSection>
    </HomeContainer>
  );
};

export default Home; 