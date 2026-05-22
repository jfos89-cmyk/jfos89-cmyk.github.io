# GitHub Pages Deployment Setup

This document provides instructions for deploying the QRA Strategies website to GitHub Pages.

## Prerequisites

1. GitHub account with repository access
2. Repository name: `qra-strategies-web`
3. GitHub username: `jfos89-cmyk`

## Deployment URL

Your website will be deployed to:
```
https://jfos89-cmyk.github.io/qra-strategies-web/
```

## Configuration

The project is configured for GitHub Pages deployment with the following setup:

### 1. Vite Configuration

The `vite.config.ts` file includes a base path configuration for production builds:

```typescript
base: process.env.NODE_ENV === 'production' ? '/qra-strategies-web/' : '/',
```

This ensures all assets and routes work correctly under the `/qra-strategies-web/` subdirectory.

### 2. GitHub Actions Workflow

A GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys the site to GitHub Pages on every push to the `main` branch.

The workflow:
- Installs dependencies using pnpm
- Builds the production bundle
- Uploads the build artifacts to GitHub Pages
- Deploys automatically

## Manual Deployment Steps

If you prefer to deploy manually:

1. Build the project:
   ```bash
   pnpm run build
   ```

2. The build output will be in `dist/public/`

3. Push the built files to GitHub Pages using the GitHub CLI or web interface

## Automatic Deployment

The GitHub Actions workflow handles deployment automatically:

1. Commit your changes to the `main` branch
2. Push to GitHub
3. GitHub Actions will automatically build and deploy the site
4. Your site will be live at `https://jfos89-cmyk.github.io/qra-strategies-web/`

## Troubleshooting

### Site not appearing

1. Check that GitHub Pages is enabled in repository settings
2. Ensure the source is set to "GitHub Actions" in the Pages settings
3. Verify that the workflow completed successfully in the Actions tab

### Assets not loading

1. Verify that the base path is correctly set to `/qra-strategies-web/`
2. Check that all asset paths use relative URLs
3. Ensure the build completed without errors

### Contact Form Not Working

The contact form requires backend API endpoints. Since GitHub Pages only hosts static files, you will need to:

1. Set up a backend service (e.g., Netlify Functions, AWS Lambda, or your own server)
2. Update the form submission endpoint in the contact form component
3. Configure CORS headers appropriately

For now, the form will attempt to submit to `/api/contact` which will not work on GitHub Pages.

## Next Steps

1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Push the code to the `main` branch
4. Monitor the Actions tab for deployment status
5. Visit your live site at the URL above
