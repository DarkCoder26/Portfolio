# Professional Developer Portfolio

This is a modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features
- **Hero Section**: Animated introduction with call-to-action.
- **About**: Professional bio and background.
- **Skills**: Categorized skills with icons.
- **Projects**: Showcase of key projects with GitHub links.
- **Experience**: Timeline of professional journey.
- **Education**: Details about your degree.
- **Blog**: Section for technical writing.
- **Contact**: Form and social links.

## Tech Stack
- React
- Tailwind CSS
- Framer Motion
- React Icons
- React Scroll

## Setup & Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at `http://localhost:5173`.

## Deployment to GitHub Pages

1. **Update `vite.config.js`**:
   Ensure `base` is set correctly. If deploying to `https://<username>.github.io/<repo-name>/`, set `base: '/<repo-name>/'`. If deploying to `https://<username>.github.io`, set `base: '/'`. 
   Currently set to `'./'` for relative paths which works for most cases.

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   - Push the contents of the `dist` folder to your repository's `gh-pages` branch.
   - Or use a tool like `gh-pages`:
     - `npm install -D gh-pages`
     - Add `"deploy": "gh-pages -d dist"` to `scripts` in `package.json`.
     - Run `npm run deploy`.

## Customization
- Update `src/components/` files to change content.
- Replace placeholder images in `src/components/Projects.jsx`.
- Update your email endpoint in `src/components/Contact.jsx`.
