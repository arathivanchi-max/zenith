"use client";

import { useState, useRef } from 'react';
import styles from './page.module.css';
import { globalMeta, socialLinks, heroAndBio, professionalExperience, education, technicalSkills, projects } from '../config/portfolio';

export default function BentoDashboard({ displayRepos, richRepoDetails }) {
  const [activeTab, setActiveTab] = useState('overview');
  const carouselRef = useRef(null);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'experience', label: 'Experience & Skills' },
    { id: 'projects', label: 'Projects' }
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerTopBarMobile}>
          <div className={styles.logo}>
            <span className="gradient-text">Portfolio Builder</span>
          </div>
          
          <div className={styles.headerActions}>
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.glassPill} ${styles.glassPillGithub}`}
            >
              GitHub
            </a>
            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.glassPill} ${styles.glassPillLinkedin}`}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.headerTabNav}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.headerTabBtn} ${activeTab === tab.id ? styles.headerTabBtnActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <div className={styles.bentoGrid}>
        
        {activeTab === 'overview' && (
          <>
            <div className={`${styles.bentoCard} ${styles.widgetProfile} fade-in`}>
              <div className={styles.bentoProfileGrid}>
                <div className={styles.bentoProfileImageContainer}>
                  <div className={styles.bentoProfileImageWrapper}>
                    <div className={styles.bentoProfileImagePlaceholder} style={{ width: '100%', height: '100%', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                       <span style={{color: '#94a3b8'}}>Photo</span>
                    </div>
                  </div>
                </div>
                <div className={styles.bentoProfileContent}>
                  <span className={styles.profileGreeting}>{heroAndBio.greeting}</span>
                  <h1 className={styles.profileName}>{heroAndBio.name}</h1>
                  <h2 className={styles.profileTitle}>
                    {heroAndBio.title}
                  </h2>
                  <p className={styles.profileDesc}>
                    {heroAndBio.description}
                  </p>
                  <div className={styles.exploreBtnWrapper}>
                    <button 
                      onClick={() => setActiveTab('projects')} 
                      className={`button button-primary ${styles.exploreBtn}`}
                    >
                      Explore Projects ➔
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.widgetCredentials} fade-in`}>
              <div className={styles.splitLayout}>
                
                <div className={styles.splitColRight} style={{width: '100%'}}>
                  <h3 className={`${styles.widgetHeader} ${styles.widgetHeaderSmall}`}>Education</h3>
                  <div className={styles.educationList}>
                    {education.map((edu, idx) => (
                      <div key={idx}>
                        <h4 className={styles.credentialTitleBold}>{edu.institution}</h4>
                        <p className={styles.credentialDesc}>{edu.degree} ({edu.date})</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'experience' && (
          <>
            <div className={`${styles.bentoCard} ${styles.widgetSkills} fade-in`}>
              <h3 className={styles.widgetHeader}>Technical Skills</h3>
              <div className={styles.skillsSidebarContainer}>
                
                {technicalSkills.map((categoryObj, idx) => {
                  const isBlue = idx % 2 === 0;
                  const sectionClass = isBlue ? `${styles.skillsSidebarSection} ${styles.skillsSidebarSectionBlue}` : styles.skillsSidebarSection;
                  const pillClass = isBlue ? `${styles.vividSkillPill} ${styles.vividSkillPillBlue}` : styles.vividSkillPill;
                  
                  return (
                    <div key={idx} className={sectionClass}>
                      <h4 className={styles.skillsSidebarCategoryTitle}>{categoryObj.category}</h4>
                      <div className={styles.skillsSidebarPillCloud}>
                        {categoryObj.skills.map((skill, sIdx) => (
                          <span key={sIdx} className={pillClass}>{skill}</span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`${styles.bentoCard} ${styles.widgetExperience} fade-in`}>
              <h3 className={styles.widgetHeader}>Professional Experience</h3>
              <div className={styles.bentoTimeline}>
                
                {professionalExperience.map((exp, idx) => (
                  <div key={idx} className={`${styles.bentoTimelineItem} ${idx > 0 ? styles.timelineGap : ''}`}>
                    <div className={styles.timelineHeader}>
                      <span className={idx === 0 ? styles.timelineRoleActive : styles.timelineRole}>{exp.role}</span>
                      <span className={idx === 0 ? styles.timelineDateActive : styles.timelineDate}>{exp.date}</span>
                    </div>
                    <p className={styles.timelineCompany}>{exp.company}</p>
                    <ul className={styles.timelineBullets}>
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className={styles.timelineBulletItem}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}

              </div>
            </div>
          </>
        )}

        {activeTab === 'projects' && (
          <div className={`${styles.bentoCard} ${styles.widgetProjects} fade-in`}>
            <h3 className={styles.widgetHeader}>Projects Showcase</h3>
            
            <div className={styles.projectSection}>
              <div className={styles.bentoProjectsGrid}>
                {projects.map((project) => (
                  <div key={project.id} className={styles.bentoProjectItem}>
                    <div className={styles.projectItemHeader}>
                      <h4 className={styles.projectItemTitle}>{project.name}</h4>
                      <div className={styles.projectTagsWrapper}>
                        {project.tags.map(tag => (
                          <span key={tag} className={styles.bentoTag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p className={styles.projectItemDesc}>{project.description}</p>
                    <ul className={styles.timelineBullets} style={{marginTop: "1rem"}}>
                      {project.features.map((feature, fIdx) => (
                         <li key={fIdx} className={styles.timelineBulletItem} style={{fontSize: "0.85rem"}}>{feature}</li>
                      ))}
                    </ul>
                    <div className={styles.projectActions} style={{marginTop: "1.5rem"}}>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`button button-secondary ${styles.projectBtn}`}>
                        View Code
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`button button-primary ${styles.projectBtn}`}>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
          </div>
        )}

      </div>
    </>
  );
}
