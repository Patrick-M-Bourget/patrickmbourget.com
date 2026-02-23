# patrickmbourget.com

Personal portfolio — product leadership, design, and audio engineering.

Built with [Astro](https://astro.build), deployed on [Vercel](https://vercel.com).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Output is in `dist/`. Preview with `npm run preview`.

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab / Bitbucket).
2. In [Vercel](https://vercel.com): **New Project** → Import your repository.
3. Root directory: leave as `./` (project root).
4. Vercel auto-detects Astro: build command `npm run build`, output `dist/`. Deploy.
5. **Custom domain:** In the project → **Settings** → **Domains** → Add **patrickmbourget.com**. Follow Vercel’s instructions to set the required DNS records (A and/or CNAME) at your registrar.

See [Vercel’s Astro docs](https://vercel.com/docs/frameworks/astro) for more.
