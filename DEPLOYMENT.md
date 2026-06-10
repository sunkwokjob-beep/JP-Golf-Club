# GitHub / Vercel Deployment

## 1. Local checks

Run before pushing or deploying:

```powershell
pnpm.cmd lint
pnpm.cmd build
```

## 2. GitHub

Create a new GitHub repository named `jp-golf-club`, then push this local project:

```powershell
cd "C:\Users\r\Documents\新裝電腦\jp-golf-club"
git branch -M main
git remote add origin https://github.com/<your-github-username>/jp-golf-club.git
git push -u origin main
```

If Git user identity is not configured yet:

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## 3. Vercel

Recommended path:

1. Open Vercel.
2. Import the GitHub repo `jp-golf-club`.
3. Vercel should detect Next.js automatically.
4. Use these settings:

```text
Framework Preset: Next.js
Install Command: pnpm install
Build Command: pnpm build
Output Directory: .next
Node.js Version: 24.x
```

## 4. Environment variables

Add these in Vercel Project Settings if needed:

```text
NEXT_PUBLIC_SITE_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_WHATSAPP_NUMBER=85212345678
```

## 5. Preview flow

- Push to `main` for production.
- Open a feature branch or pull request for preview deployments.
- Share the generated Vercel preview URL with colleagues for review.
