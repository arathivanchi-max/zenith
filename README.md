# Next.js Bento Portfolio Builder

A beautiful, high-performance, and fully responsive "Bento Grid" style portfolio template built with Next.js and React. It features an integrated tab dashboard, dark mode aesthetic, smooth CSS animations, and a centralized configuration file.

## Features
- 🎨 **Bento Grid Dashboard**: Beautifully structured glassmorphic cards with smooth hover animations and glowing shadows.
- ⚙️ **Centralized Configuration**: All text, skills, experiences, and projects are managed in a single `src/config/portfolio.js` file. No need to hunt through UI components.
- 📱 **Fully Responsive**: Adapts elegantly from desktop split-screen sidebars to stacked mobile layouts.
- ✨ **Micro-interactions**: Dynamic gradient headers, ambient pointer glows, and responsive tab buttons.
- 🚀 **Next.js App Router**: Fast, fully static production builds.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing Your Portfolio

To make this portfolio your own, simply edit the `src/config/portfolio.js` file. 

You can customize:
- `globalMeta`: Your name, title, and SEO description.
- `socialLinks`: Your GitHub, LinkedIn, and Twitter links.
- `heroAndBio`: The main greeting and introductory text on the Overview tab.
- `professionalExperience`: Your career timeline.
- `education`: Your degrees and certifications.
- `technicalSkills`: Your skills, categorized into groups (rendered as beautiful color-coded pills).
- `projects`: Showcase your repositories and live apps in the Projects tab.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) or push it directly to Netlify/GitHub Pages.

```bash
npm run build
```
This generates an optimized static build in the `.next` folder.
