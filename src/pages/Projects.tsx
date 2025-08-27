import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding: 80px 0;
  background-color: ${({ theme }) => theme.colors.surface};
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const PageTitle = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  border: 2px solid ${({ isActive, theme }) => isActive ? theme.colors.primary : theme.colors.cardBorder};
  background-color: ${({ isActive, theme }) => isActive ? theme.colors.primary : 'transparent'};
  color: ${({ isActive, theme }) => isActive ? (theme.name === 'dark' ? '#0a0a0a' : '#ffffff') : theme.colors.textSecondary};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ isActive, theme }) => isActive ? (theme.name === 'dark' ? '#0a0a0a' : '#ffffff') : theme.colors.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px ${({ theme }) => theme.colors.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px ${({ theme }) => theme.colors.shadowHover};
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #00d4aa 0%, #00b4d8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.name === 'dark' ? '#0a0a0a' : '#ffffff'};
  font-size: 3rem;
  font-weight: 700;
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background-color: #f0f0f0;
  color: #000000;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.name === 'dark' ? '#f0f0f0' : '#f1f5f9'};
  color: ${({ theme }) => theme.name === 'dark' ? '#666666' : '#4a5568'};
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #00d4aa;
    color: ${({ theme }) => theme.name === 'dark' ? 'white' : '#ffffff'};
  }
`;

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    tech: string[];
    github: string | null;
    live: string | null;
  }> = [
    {
      id: 1,
      title: 'Coming Soon...',
      description: 'Projects will be added here based on your input.',
      image: '🚀',
      category: 'frontend',
      tech: ['React', 'TypeScript'],
      github: null,
      live: null
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'research', label: 'Research' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsContainer>
      <ProjectsContent>
        <PageTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </PageTitle>
        <PageSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
        </PageSubtitle>

        <FilterContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter.id}
              isActive={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectImage>{project.image}</ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTech>
                  {project.tech.map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                      Code
                    </ProjectLink>
                  )}
                  {project.live && (
                    <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                      Live Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects; 