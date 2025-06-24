# SVGOUI

Fast, open-source UI for [SVGO](https://github.com/svg/svgo) – compress, optimize and minify SVGs right in your browser.

> Inspired by [SVGOMG](https://github.com/jakearchibald/svgomg) but rebuilt from scratch with modern React, Tailwind CSS and Jotai.


## ✨ Features

• **Drag-and-drop & Paste** – drop an `.svg` anywhere or paste SVG markup/file.

• **Real-time compression** – runs SVGO in the browser; see size before/after and percentage saved instantly.

• **Plugin toggles** – enable / disable individual SVGO plugins, including multipass, prettify and more (state is persisted in `localStorage`).

• **Markup & Image views** – switch between rendered image and formatted SVG markup.

• **Offline** – everything happens client-side; no files leave your computer.

## 📦 Tech Stack

| Layer       | Library / Tool |
|-------------|----------------|
| Front-end   | React + TypeScript |
| Build       | Vite |
| State       | Jotai |
| Styling     | Tailwind CSS |
| Icons       | [Lucide](https://lucide.dev) |
| Notifications | [Sonner](https://sonner.emilkowal.ski/) |
| Core        | SVGO (browser build) |

## 🚀 Getting Started

```bash
# clone
git clone https://github.com/your-name/svgoui.git
cd svgoui

# install (uses pnpm ✨)
pnpm install

# start dev server
pnpm dev

# build for production
pnpm build
```

Open `http://localhost:5173` and start optimizing!

## 🛠️ Project Structure (high-level)

```
src/
├─ assets/          demo SVGs & images
├─ components/      reusable UI (action-bar, toast, nav-bar, …)
├─ context/         Jotai atoms for global state
├─ views/           page-level views (image, markup)
├─ App.tsx          application root
└─ main.tsx         Vite entry point
```

## 📝 Development Notes

• Uses **pnpm** workspaces; if you prefer npm/yarn you can, but lockfile is `.pnpm-lock.yaml`.

• Tailwind utility classes prefer `gap-*` for spacing and Flexbox layout per coding guidelines.

• All new files / folders are **kebab-case**.

## 🙏 Acknowledgements

* [SVGO](https://github.com/svg/svgo) – powerful SVG optimizer
* [SVGOMG](https://github.com/jakearchibald/svgomg) – original inspiration

## 📄 License

MIT © 2025 Rick Zhang
