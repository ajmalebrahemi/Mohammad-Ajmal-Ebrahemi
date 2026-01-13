# Professional Portfolio Website

A high-end, modern, and professional personal portfolio website built with Angular (latest stable version). Designed specifically for online freelancing platforms like Upwork and Freelancer, this portfolio showcases your skills, projects, and expertise in a trustworthy and premium manner.

## ✨ Features

- **Modern Design**: Clean, minimal, and professional UI with glassmorphism effects
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **SEO Optimized**: Meta tags, semantic HTML, and accessibility features
- **Fast Loading**: Lightweight and performance-optimized
- **Interactive Sections**: Hero, About, Skills, Projects, Experience, Testimonials, Contact

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build:prod
```

The build artifacts will be stored in the `dist/professional-portfolio/` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── about/
│   │   ├── contact/
│   │   ├── experience/
│   │   ├── footer/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── projects/
│   │   ├── skills/
│   │   ├── testimonials/
│   │   ├── preloader/
│   │   ├── scroll-to-top/
│   │   └── floating-hire-button/
│   ├── pages/               # Page components
│   │   └── home/
│   ├── services/            # Services
│   │   ├── theme.service.ts
│   │   └── scroll.service.ts
│   ├── app.component.ts
│   └── app.routes.ts
├── assets/                 # Static assets
├── styles.scss             # Global styles
└── index.html
```

## 🎨 Customization

### 1. Personal Information

#### Update Hero Section
Edit `src/app/components/hero/hero.component.html`:
- Change "Your Name" to your actual name
- Update the tagline and description
- Replace the profile image placeholder

#### Update About Section
Edit `src/app/components/about/about.component.ts`:
- Modify the about text
- Update statistics (projects, clients, experience)
- Customize feature points

### 2. Skills

Edit `src/app/components/skills/skills.component.ts`:
- Update the `skills` array with your technologies
- Adjust skill levels (0-100)
- Add/remove skills as needed

### 3. Projects

Edit `src/app/components/projects/projects.component.ts`:
- Replace placeholder projects with your actual projects
- Update project images (replace placeholder URLs)
- Add real GitHub and live demo URLs
- Modify tech stacks

### 4. Testimonials

Edit `src/app/components/testimonials/testimonials.component.ts`:
- Replace placeholder testimonials with real client feedback
- Update client names, roles, and companies
- Add client profile images

### 5. Contact Information

Edit `src/app/components/contact/contact.component.html`:
- Update email address
- Update phone number
- Add your social media links (GitHub, LinkedIn, Upwork, Freelancer)

### 6. CV Download

To enable CV download:
1. Place your CV file in `src/assets/cv.pdf`
2. Update `src/app/components/hero/hero.component.ts`:
   ```typescript
   downloadCV(): void {
     const link = document.createElement('a');
     link.href = 'assets/cv.pdf';
     link.download = 'YourName_CV.pdf';
     link.click();
   }
   ```

### 7. Colors & Theme

Edit `src/styles.scss` to customize colors:
- Modify CSS variables in `:root` and `[data-theme="dark"]`
- Adjust accent colors, backgrounds, and text colors

### 8. Meta Tags & SEO

Edit `src/index.html`:
- Update title, description, and keywords
- Add your Open Graph tags
- Update author information

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 968px
- Desktop: > 968px

## 🚢 Deployment

### Netlify

1. Build the project:
   ```bash
   npm run build:prod
   ```

2. Drag and drop the `dist/professional-portfolio` folder to [Netlify](https://app.netlify.com/drop)

3. Or connect your GitHub repository for automatic deployments

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Or connect your GitHub repository on [Vercel Dashboard](https://vercel.com)

### GitHub Pages

1. Install angular-cli-ghpages:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build and deploy:
   ```bash
   npm run build:prod -- --base-href="/your-repo-name/"
   npx angular-cli-ghpages --dir=dist/professional-portfolio
   ```

3. Update `angular.json`:
   ```json
   "outputPath": "dist/professional-portfolio",
   "baseHref": "/your-repo-name/"
   ```

## 🎯 Performance Optimization

- Images are lazy-loaded
- CSS and JavaScript are minified in production
- Unused code is tree-shaken
- Components are standalone for better code splitting

## 🔧 Technologies Used

- **Angular 17+**: Latest stable version with standalone components
- **TypeScript**: Strict mode enabled
- **SCSS**: For styling
- **Angular Animations**: For smooth transitions
- **RxJS**: For reactive programming
- **Angular Signals**: For reactive state management

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Support

For issues, questions, or contributions, please open an issue on GitHub.

## 📧 Contact

Replace this with your contact information:
- Email: your.email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)

---

**Built with ❤️ using Angular**

