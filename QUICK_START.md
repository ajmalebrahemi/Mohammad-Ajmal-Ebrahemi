# Quick Start Guide

## 🚀 Installation & Running

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Open browser:**
   Navigate to `http://localhost:4200`

## ⚡ Quick Customization Checklist

### Essential Updates (Do These First!)

- [ ] **Hero Section** (`src/app/components/hero/hero.component.html`)
  - Replace "Your Name" with your actual name
  - Update the description text
  - Add your profile image

- [ ] **About Section** (`src/app/components/about/about.component.ts`)
  - Update the about text
  - Modify statistics (projects, clients, years)

- [ ] **Skills** (`src/app/components/skills/skills.component.ts`)
  - Replace with your actual skills
  - Adjust skill levels

- [ ] **Projects** (`src/app/components/projects/projects.component.ts`)
  - Add your real projects
  - Update images and links

- [ ] **Contact** (`src/app/components/contact/contact.component.html`)
  - Update email and phone
  - Add your social media links

- [ ] **Meta Tags** (`src/index.html`)
  - Update title and description
  - Add your Open Graph tags

- [ ] **CV Download** (`src/app/components/hero/hero.component.ts`)
  - Place CV in `src/assets/cv.pdf`
  - Update download function

## 🎨 Theme Customization

Edit `src/styles.scss` to change colors:
- Light theme: `:root` section
- Dark theme: `[data-theme="dark"]` section

## 📦 Build for Production

```bash
npm run build:prod
```

Output: `dist/professional-portfolio/`

## 🌐 Deploy

### Netlify (Easiest)
1. Build: `npm run build:prod`
2. Drag `dist/professional-portfolio` to Netlify

### Vercel
```bash
npm i -g vercel
vercel
```

## 📝 Notes

- All placeholder images use `via.placeholder.com` - replace with real images
- Contact form is frontend-only (connect to backend API if needed)
- CV download needs actual file in assets folder

