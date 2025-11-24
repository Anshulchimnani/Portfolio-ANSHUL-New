# Anshul Chimnani - Portfolio Website

A minimal, clean portfolio website inspired by [hirok.io](https://hirok.io/), built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases data science and machine learning projects with a focus on professional presentation and enterprise security credentials.

## 🚀 Features

- **Minimal Design**: Clean, content-first design with lots of whitespace
- **Dark Mode**: Seamless light/dark theme switching with persistence
- **GitHub Integration**: Automatically fetches and displays projects from GitHub
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Comprehensive metadata and structured data
- **Fast Performance**: Built with Next.js 14 App Router and ISR caching

## 📋 Prerequisites

- Node.js 18+ and npm
- A GitHub account (for project showcase)
- Your professional photo (for hero section)
- Your CV in PDF format

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio-ANSHUL-New
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Updating Content

All editable content is centralized in `/lib/data.ts` for easy maintenance. Here's what you can update:

### Personal Information
```typescript
export const personalInfo = {
  name: "Your Name",
  location: "Your City, Country",
  email: "your-email@example.com",
  // ... update other fields
};
```

### Featured Projects
To change which projects appear on the homepage:
```typescript
export const featuredProjects = [
  "repo-name-1",
  "repo-name-2",
  // Add or remove repo names from your GitHub
];
```

### Impact Metrics
Update your key numbers:
```typescript
export const impactMetrics = {
  metrics: [
    { value: "500K+", label: "Your achievement" },
    // ... update with your real metrics
  ],
};
```

### Skills and Expertise
Modify the expertise section:
```typescript
export const expertise = [
  {
    icon: "📊",
    title: "Your Skill",
    description: "Technologies you use",
  },
  // ... add or modify skills
];
```

## 🖼️ Adding Your Photo and CV

### Profile Photo
1. Add your professional photo to `/public/profile.jpg`
2. Recommended size: 500x500px or larger (square)
3. Format: JPG or PNG

### CV PDF
1. Add your CV to `/public/cv.pdf`
2. The download button on the CV page will automatically link to this file

## 🚀 Deployment to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"

3. **Optional: Add GitHub Token**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add `GITHUB_TOKEN` with your GitHub personal access token
   - This increases API rate limits from 60 to 5000 requests/hour
   - Create token at: https://github.com/settings/tokens (only needs `public_repo` scope)

## 📁 Project Structure

```
Portfolio-ANSHUL-New/
├── app/
│   ├── api/projects/route.ts    # API route for GitHub projects
│   ├── cv/page.tsx               # CV page
│   ├── projects/page.tsx         # All projects page
│   ├── layout.tsx                # Root layout with theme provider
│   ├── page.tsx                  # Homepage
│   └── globals.css               # Global styles
├── components/
│   ├── Header.tsx                # Navigation header
│   ├── Hero.tsx                  # Hero section
│   ├── ImpactMetrics.tsx         # Metrics display
│   ├── FeaturedProjects.tsx      # Featured projects grid
│   ├── ProjectCard.tsx           # Reusable project card
│   ├── Expertise.tsx             # Skills section
│   ├── ISO27001.tsx              # Security credentials
│   ├── WorkExperience.tsx        # Work history
│   ├── Consulting.tsx            # Services offered
│   ├── Contact.tsx               # Contact section
│   ├── Footer.tsx                # Footer
│   └── ThemeToggle.tsx           # Dark mode toggle
├── lib/
│   ├── data.ts                   # All editable content (UPDATE THIS!)
│   ├── github.ts                 # GitHub API functions
│   └── types.ts                  # TypeScript interfaces
├── public/
│   ├── profile.jpg               # Your photo (ADD THIS!)
│   └── cv.pdf                    # Your CV (ADD THIS!)
└── package.json
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  accent: "#3b82f6",  // Change accent color
  // ... other colors
}
```

### Fonts
The site uses Inter font by default. To change it, edit `app/layout.tsx`:
```typescript
import { YourFont } from "next/font/google";
```

## 🔧 Troubleshooting

### Projects not loading
- Check your internet connection
- Verify GitHub username in `/lib/github.ts` is correct
- Check browser console for API errors
- GitHub API has rate limits (60/hour without token)

### Dark mode not working
- Clear browser cache and localStorage
- Check if JavaScript is enabled
- Try in incognito mode

### Build errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

## 📊 Performance

The site is optimized for performance:
- **ISR Caching**: GitHub data cached for 1 hour
- **Image Optimization**: Next.js Image component
- **Font Optimization**: next/font for zero layout shift
- **Minimal JavaScript**: Only essential client-side code

Target Lighthouse scores: 95+ on all metrics

## 🤝 Support

If you need help:
1. Check this README first
2. Look at `/lib/data.ts` for content updates
3. Check the browser console for errors
4. Review the implementation plan in the project

## 📄 License

This project is open source and available for personal use.

## 🙏 Credits

- Design inspired by [hirok.io](https://hirok.io/)
- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Built with ❤️ by Anshul Chimnani**
