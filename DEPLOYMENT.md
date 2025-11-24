# Deployment Guide

This guide will walk you through deploying your portfolio website to Vercel and configuring the custom domain `www.anshul.clepto.io`.

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier is sufficient)
- Domain access for `anshul.clepto.io`

## Step 1: Prepare Your Repository

1. Ensure all changes are committed and pushed to GitHub:
```bash
git add .
git commit -m "Build portfolio website"
git push -u origin claude/build-portfolio-site-01UQdE6WYm32gQngGGkAqkPh
```

2. Verify your repository is public or accessible to Vercel

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository: `cleptoio/ANSHUL-REPO-REPO`
4. Configure project settings:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: .next (auto-detected)
5. Click "Deploy"
6. Wait 2-3 minutes for the build to complete

### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## Step 3: Configure Custom Domain

### DNS Configuration

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add domain: `www.anshul.clepto.io`
4. Vercel will provide DNS records. Add these to your DNS provider:

**For www.anshul.clepto.io:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**For apex domain (anshul.clepto.io):**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

5. Wait for DNS propagation (5-60 minutes)
6. Vercel will automatically provision SSL certificate

### Verify Domain Configuration

```bash
# Check DNS propagation
nslookup www.anshul.clepto.io

# Test HTTPS
curl -I https://www.anshul.clepto.io
```

## Step 4: Environment Variables (Optional)

If you need environment variables:

1. Go to "Settings" → "Environment Variables"
2. Add variables for all environments:
   - Production
   - Preview
   - Development

Example:
```
NEXT_PUBLIC_SITE_URL=https://www.anshul.clepto.io
```

## Step 5: Configure Git Integration

Vercel automatically sets up:
- **Production Branch**: Deploy from `main` branch
- **Preview Deployments**: Automatic for all branches and PRs
- **Instant Rollbacks**: One-click rollback to previous deployments

To configure:
1. Go to "Settings" → "Git"
2. Set production branch (default: `main`)
3. Enable/disable preview deployments as needed

## Step 6: Performance Optimization

Vercel automatically provides:
- **Global CDN**: Assets served from nearest edge location
- **Image Optimization**: Automatic WebP conversion
- **Smart Caching**: Optimized cache headers
- **Compression**: Brotli and Gzip compression

### Verify Performance

1. Run Lighthouse audit:
```bash
npx lighthouse https://www.anshul.clepto.io --view
```

2. Expected scores:
   - Performance: 95+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

## Step 7: Analytics (Optional)

Enable Vercel Analytics:
1. Go to "Analytics" tab
2. Enable Web Analytics
3. View real-time traffic data

## Continuous Deployment

Every push to your repository triggers:
1. Automatic build
2. Preview deployment (for non-production branches)
3. Production deployment (for main branch)
4. Automatic invalidation of CDN cache

### Deployment Workflow

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel automatically:
# 1. Detects push
# 2. Builds project
# 3. Runs tests
# 4. Deploys to production/preview
# 5. Sends deployment notification
```

## Monitoring

### Check Build Logs

1. Go to "Deployments" tab
2. Click on any deployment
3. View "Build Logs" for details

### Check Runtime Logs

1. Go to "Functions" tab
2. View real-time function logs
3. Filter by time/severity

## Troubleshooting

### Build Failures

```bash
# Test build locally first
npm run build

# Check for TypeScript errors
npm run lint

# Verify all dependencies are installed
npm install
```

### Domain Not Working

1. Verify DNS records are correct
2. Wait for DNS propagation (use `nslookup`)
3. Check Vercel domain status in dashboard
4. Ensure SSL certificate is issued

### Performance Issues

1. Check Vercel Analytics for bottlenecks
2. Optimize images (use Next.js Image component)
3. Review bundle size: `npm run build`
4. Enable static generation where possible

## Rollback Procedure

If you need to rollback:

1. Go to "Deployments" tab
2. Find the previous working deployment
3. Click "..." menu → "Promote to Production"
4. Confirm promotion

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

## Support

For issues:
- Vercel Support: https://vercel.com/support
- Next.js Issues: https://github.com/vercel/next.js/issues
- Portfolio Issues: https://github.com/cleptoio/ANSHUL-REPO-REPO/issues

## Timeline

**0-1 Month:**
- ✅ Initial deployment to Vercel
- ✅ Custom domain configuration
- ✅ SSL certificate setup
- 🔄 Content refinement and updates
- 🔄 Performance optimization

**1-3 Months:**
- 📋 Add blog section (optional)
- 📋 Integrate analytics
- 📋 Add contact form backend
- 📋 SEO optimization and monitoring
- 📋 Gather user feedback

**3-6 Months:**
- 📋 Advanced features (search, filters)
- 📋 A/B testing different sections
- 📋 Performance monitoring and optimization
- 📋 Regular content updates
- 📋 Portfolio expansion

---

**Current Status:** ✅ Ready for deployment!
