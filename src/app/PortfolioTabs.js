"use client";

import { useState } from 'react';
import styles from './page.module.css';

export default function PortfolioTabs({ displayRepos, richRepoDetails }) {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'AI Projects' }
  ];

  return (
    <>
      {/* Tab Navigation */}
      <div className={styles.tabNavContainer}>
        <div className={styles.tabNav}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className={styles.tabContent}>
        {activeTab === 'about' && (
          <div className="fade-in">
            {/* About Section */}
            <section id="about" className={styles.tabSection}>
              <h2 className={styles.tabSectionTitle}>About Me</h2>
              <div className="glass-card">
                <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                  I've spent 19 years building software people rely on without thinking about it — video streaming on TiVo, 
                  ad systems at Yahoo, and payment platforms. Most of my career has been in C++ middleware, 
                  embedded systems, and streaming infrastructure, working where hardware meets software and things need to just work.
                </p>
                <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>
                  At Xperi/TiVo, I worked on video playback across Android and Apple TV — improving playback metrics accuracy, 
                  reducing ad latency, building streaming observability platforms, and enabling first-ever 4K streaming on 
                  embedded Linux platforms.
                </p>
                <p style={{ color: 'var(--text-muted)' }}>
                  Currently, I'm building AI agents with Claude Code and Cursor, automation workflows on MindStudio, 
                  and apps on Lovable — while keeping up with modern streaming technologies. I thrive on collaboration, 
                  continuous growth, and creating scalable, user-focused software that delivers real impact.
                </p>
              </div>
            </section>


            {/* Education */}
            <section className={styles.tabSection} style={{ marginTop: '3rem' }}>
              <h2 className={styles.tabSectionTitle}>Education</h2>
              <div className="glass-card">
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Indian Institute of Technology, Madras</h3>
                  <p style={{ color: 'var(--text-muted)' }}>MTech & BTech, Civil Engineering</p>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Coursera</h3>
                  <p style={{ color: 'var(--text-muted)' }}>AI For Everyone & Machine Learning Specialization</p>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>UC Berkeley & UCSC Extension</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Software Engineering Courses</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="fade-in">
            <section id="skills" className={styles.tabSection}>
              <h2 className={styles.tabSectionTitle}>Technical Skills</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillCardTitle}>Languages</h3>
                  <p className={styles.skillCardContent}>C, C++, Python, Java, SQL</p>
                </div>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillCardTitle}>Media & Streaming</h3>
                  <p className={styles.skillCardContent}>GStreamer, HLS/DASH, ABR algorithms</p>
                </div>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillCardTitle}>DRM & Security</h3>
                  <p className={styles.skillCardContent}>Widevine L1, FairPlay, PlayReady SL3000, multi-DRM integration</p>
                </div>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillCardTitle}>Frameworks & Middleware</h3>
                  <p className={styles.skillCardContent}>Multithreaded C++ frameworks, IPC, API design, SQLite, performance optimization</p>
                </div>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillCardTitle}>Observability & Analytics</h3>
                  <p className={styles.skillCardContent}>Playback metrics, QoE instrumentation, Wireshark, IMA SDK profiling</p>
                </div>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillCardTitle}>Tools & CI/CD</h3>
                  <p className={styles.skillCardContent}>Jenkins, Git, CI/CD, JIRA, Confluence, Perforce, Android Studio, IntelliJ</p>
                </div>
                <div className={styles.skillCard}>
                  <h3 className={styles.skillCardTitle}>AI / ML</h3>
                  <p className={styles.skillCardContent}>Prompt Engineering (Claude, ChatGPT, Gemini) &middot; AI Agent Development (Claude Code, Claude Projects & Skills, Cursor, MindStudio, Open Claw) &middot; AI-Powered App Development (Lovable, Base44)</p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="fade-in">
            <section id="experience" className={styles.tabSection}>
              <h2 className={styles.tabSectionTitle}>Professional Experience</h2>
              <div className="glass-card">
                <div className={styles.timeline}>
                  <div className={styles.timelineItem}>
                    <h3 className={styles.jobRole}>Staff Software Engineer</h3>
                    <div className={styles.jobCompany}>Xperi Inc. (TiVo)</div>
                    <div className={styles.jobDate}>Feb 2011 - Sep 2024</div>
                    <ul className={styles.jobDesc}>
                      <li>Technical lead within the IPTV Solutions team, owning video playback architecture and performance across Android Streamer and Apple tvOS platforms for 1M+ active users.</li>
                      <li>Drove IPTV multi-DRM (Widevine, FairPlay) and streaming analytics initiatives, improving playback accuracy and observability for 1M+ users through Splunk-based QoE monitoring.</li>
                      <li>Reduced ad video playback latency by 10% by developing reusable Python-based performance analysis tools.</li>
                      <li>Led implementation of the Reduced Burn-In feature (HLS suppression) with HTTP transaction tracing and Wireshark validation.</li>
                      <li>Architected and led development of a C++-based Web Development Kit (WDK) compliant with HbbTV for TiVo device APIs.</li>
                      <li>Enabled first-ever 4K content streaming by integrating PlayReady DRM into TiVo's embedded Linux/C++ device platforms.</li>
                    </ul>
                  </div>
                  
                  <div className={styles.timelineItem}>
                    <h3 className={styles.jobRole}>Senior Software Engineer</h3>
                    <div className={styles.jobCompany}>Yahoo! Inc.</div>
                    <div className={styles.jobDate}>Aug 2005 - Dec 2011</div>
                    <ul className={styles.jobDesc}>
                      <li>Led key features for the Right Media Ad Server Team including Behavioral targeting, Exchange Quality Management, and Video ads.</li>
                      <li>Drove next-gen architecture efforts, replacing brute-force ad selection with scalable, non-exponential C++ implementations on 64-bit Linux.</li>
                      <li>Designed and delivered billing and payments platform features, including PayPal purchase integration and multi-item product support for Yahoo! Wallet.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="fade-in">
            <section id="ai-projects" className={styles.tabSection}>
              <h2 className={styles.tabSectionTitle}>AI Projects & Exploration</h2>
              <div className={styles.grid}>
                {displayRepos.map((repo) => {
                  const custom = richRepoDetails[repo.name] || {};
                  const displayName = custom.displayName || repo.name.split(/[-_]+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
                  const description = custom.description || repo.description || "A public repository showcasing engineering design, clean code, and scalable architecture implementation.";
                  const tags = custom.tags || [repo.language, ...(repo.topics || [])].filter(Boolean).slice(0, 3);
                  const features = custom.features || [];
                  const liveUrl = custom.liveUrl || repo.homepage;

                  return (
                    <div key={repo.name} className={`glass-card ${styles.aiProjectCard}`} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{displayName}</h3>
                        <div className={styles.aiTechStack}>
                          {tags.map(tag => (
                            <span key={tag} className={styles.aiTechTag}>{tag}</span>
                          ))}
                        </div>
                        <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text-color)' }}>
                          {description}
                        </p>
                        
                        {features.length > 0 && (
                          <ul style={{ listStyleType: 'circle', paddingLeft: '1.25rem', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            {features.map((feature, idx) => (
                              <li key={idx} style={{ marginBottom: '0.35rem' }}>{feature}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      
                      <div style={{ display: 'flex', gap: '0.75rem', marginTop: 'auto' }}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="button button-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', flex: 1 }}>
                          View GitHub
                        </a>
                        {liveUrl && (
                          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="button button-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', flex: 1 }}>
                            Launch App
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
}
