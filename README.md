# Ravi Sankar — Full Stack Developer Portfolio

A responsive React + Vite portfolio using a red, black, and white visual system. Includes your portrait, project cards, skills, experience, contact section, and project-detail modals.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production website is generated in `dist/`.

## Before publishing
1. Open `src/main.jsx`.
2. Update the `profile` object with your real email, GitHub profile, and LinkedIn URL.
3. Put your final resume PDF at `public/files/Ravi-Sankar-Resume.pdf` so the Download Resume button works.
4. Review project descriptions and change them to match your exact contributions.
5. Add live demo/repository links only when you have working public URLs.
6. Replace any project preview illustrations with real screenshots if you have permission to show them.

## Push to GitHub

Create an empty repository on GitHub, then run these commands from this folder:

```bash
git init
git add .
git commit -m "Build Ravi Sankar portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the remote URL with your own GitHub repository URL.

## Deploy
You can deploy this Vite project to Vercel, Netlify, or GitHub Pages. For Vercel/Netlify, connect the repository and use:
- Build command: `npm run build`
- Output directory: `dist`

## Notes
- The email link opens the visitor's email app, the Copy Email button copies `ravisk8701@gmail.com`, and the phone link can open a calling app. These do not submit messages to a backend.
- The project detail dialogs are functional, but project demo/repository URLs have intentionally not been fabricated.
- The experience timeline is intentionally generic until verified employer names and dates are added.
