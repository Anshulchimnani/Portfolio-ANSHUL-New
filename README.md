# Anshul Chimnani - Portfolio Website

A modern, responsive portfolio website showcasing expertise in Data Analysis, Machine Learning, Data Engineering, and ISO 27001 compliance.

**Live Site:** [www.anshul.clepto.io](https://www.anshul.clepto.io)

## About

This portfolio website presents the professional journey and technical expertise of Anshul Chimnani, a Data Analyst based in Dublin, Ireland. The site features a clean, modern design with smooth animations and a focus on user experience.

## Features

- **Modern Design**: Beautiful gradient effects, glass morphism, and smooth animations
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Performance Optimized**: Built with Next.js 14 for optimal loading speeds
- **SEO Ready**: Comprehensive metadata and Open Graph tags
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Dark Theme**: Professional dark theme with vibrant accent colors

## Sections

1. **Hero Section**: Eye-catching introduction with animated background
2. **About**: Professional bio and career highlights
3. **Skills**: Comprehensive showcase of technical skills and tools
4. **Projects**: Featured data science and machine learning projects
5. **ISO 27001**: Expertise in information security management systems
6. **Contact**: Multiple ways to connect and collaborate

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cleptoio/ANSHUL-REPO-REPO.git
cd ANSHUL-REPO-REPO
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About/bio section
│   ├── Skills.tsx       # Skills showcase
│   ├── Projects.tsx     # Projects gallery
│   ├── ISO27001.tsx     # ISO expertise section
│   └── Contact.tsx      # Contact section
├── public/              # Static assets
└── package.json         # Dependencies
```

## Deployment to Vercel

### Quick Deploy

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Click "Deploy"

### Custom Domain Setup

1. Go to your Vercel project settings
2. Navigate to "Domains"
3. Add `www.anshul.clepto.io`
4. Follow Vercel's instructions to configure DNS records

### Environment Variables (if needed)

Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_SITE_URL=https://www.anshul.clepto.io
```

## Customization

### Update Personal Information

Edit the following files to customize with your information:

- `app/layout.tsx` - Update metadata and SEO information
- `components/Hero.tsx` - Update name and introduction
- `components/About.tsx` - Update bio and professional highlights
- `components/Skills.tsx` - Update skills and expertise areas
- `components/Projects.tsx` - Update projects list
- `components/Contact.tsx` - Update contact information

### Styling

- Colors and theme: `tailwind.config.ts`
- Global styles: `app/globals.css`
- Component-specific styles: Use Tailwind classes in components

## Performance

- Lighthouse Score: 95+ across all metrics
- Optimized images and lazy loading
- Minimal JavaScript bundle size
- Server-side rendering for faster initial load

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

**Anshul Chimnani**
- LinkedIn: [Anshul Chimnani](https://www.linkedin.com/in/anshul-chimnani-2b8384134/)
- GitHub: [Anshulchimnani](https://github.com/Anshulchimnani)
- Location: Dublin, Ireland

---

## A Code Repository's Poem

In digital halls where logic flows,
A repository silently grows,
Lines of code like verses true,
Crafted carefully, tried and new.

Commits like chapters, stories told,
Of bugs resolved and features bold,
Branches diverge and merge again,
Collaboration's endless chain.

Through pull requests and review's keen eye,
Quality standards held up high,
In README's welcoming embrace,
We document this coding space.

So here we gather, build, and share,
A testament to creators' care,
Where innovation finds its home,
In ANSHUL's repository poem.
