# GitHub Pages Deployment Guide for IPCBL Framework

## Overview
This guide will help you deploy your IPCBL Framework website to GitHub Pages as a static site.

## Prerequisites
- GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Step-by-Step Deployment Process

### 1. Create GitHub Repository
1. Go to GitHub.com and create a new repository
2. Name it `ipcbl-framework` (or your preferred name)
3. Make it public (required for free GitHub Pages)
4. Don't initialize with README since you have existing code

### 2. Push Your Code to GitHub
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: IPCBL Framework website"

# Add your GitHub repository as origin
git remote add origin https://github.com/yourusername/ipcbl-framework.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Update Package.json Scripts
Add these scripts to your `package.json` file:

```json
{
  "scripts": {
    "build:static": "vite build --config vite.config.static.ts",
    "predeploy": "npm run build:static",
    "deploy": "gh-pages -d dist/public"
  }
}
```

### 4. Use Static Vite Configuration
A separate `vite.config.static.ts` file has been created for GitHub Pages deployment. This configuration:

- Removes server-side dependencies
- Sets the correct base path for your repository
- Optimizes the build for static hosting

Update the repository name in `vite.config.static.ts`:
```typescript
base: "/your-repository-name/",
```

### 5. Build for Static Deployment
Since your current setup includes a backend, you need to create a static-only build:

```bash
# Build the frontend only
npm run build:static
```

This will create a `dist/public` folder with your static website.

### 6. Deploy to GitHub Pages

#### Option A: Using gh-pages package (Recommended)
```bash
# Install gh-pages if not already installed
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

#### Option B: Manual deployment
1. Copy contents of `dist/public` to a new branch called `gh-pages`
2. Push the `gh-pages` branch to GitHub
3. Enable GitHub Pages in repository settings

### 7. Configure GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose `gh-pages` branch and `/` (root) folder
6. Click "Save"

### 8. Access Your Deployed Site
Your site will be available at:
`https://yourusername.github.io/ipcbl-framework/`

## Important Notes

### Static Site Considerations
Since GitHub Pages only serves static files, you'll need to:

1. **Remove Backend Dependencies**: The current setup includes Express.js server code that won't work on GitHub Pages
2. **Update Import Paths**: Remove any server-related imports from your React components
3. **Handle Routing**: Use hash routing for client-side navigation

### Recommended Changes for Static Deployment

#### 1. Create a Static Build Configuration
Create `vite.config.static.ts`:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
  base: "/ipcbl-framework/", // Replace with your repo name
});
```

#### 2. Update Build Script
```json
{
  "scripts": {
    "build:static": "vite build --config vite.config.static.ts"
  }
}
```

### Custom Domain (Optional)
If you want to use a custom domain:

1. Add a `CNAME` file to your `dist/public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

## Troubleshooting

### Common Issues
1. **404 Errors**: Check that the base path in vite.config matches your repository name
2. **Assets Not Loading**: Ensure all asset paths are relative and properly configured
3. **Routing Issues**: Use hash routing for single-page applications

### Build Errors
If you encounter build errors:
1. Remove server-related code from client components
2. Check all import paths are correct
3. Ensure all dependencies are properly installed

## Deployment Checklist
- [ ] Repository created on GitHub
- [ ] Code pushed to main branch
- [ ] Package.json updated with deployment scripts
- [ ] Vite config updated with correct base path
- [ ] Static build successful (`npm run build:static`)
- [ ] Deployed to gh-pages branch
- [ ] GitHub Pages configured in repository settings
- [ ] Site accessible at GitHub Pages URL

## Support
If you encounter issues, check:
- GitHub Pages documentation
- Vite deployment guide
- Repository settings and branch configuration

Your IPCBL Framework website should now be live on GitHub Pages!