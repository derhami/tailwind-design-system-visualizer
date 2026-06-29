# Tailwind Design System Visualizer

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-green)](https://tailwind.nounproject.ir)

An interactive visual toolkit for exploring Tailwind CSS utilities — spacing, typography, colors, layout, positioning, and more — all in one place.

🔗 **Live Demo:** [tailwind.nounproject.ir](https://tailwind.nounproject.ir)

---

## Overview

Tailwind CSS is powerful, but its utility-first approach can feel overwhelming without a visual reference. This tool bridges that gap by letting you see, explore, and understand Tailwind's design system interactively — ideal for learning, prototyping, and onboarding.

---

## Features

- **Spacing Scale Visualizer** — see every spacing value rendered visually
- **Typography Preview** — font sizes, weights, line heights at a glance
- **Color Palette Explorer** — full Tailwind color system with hex values
- **Layout & Container Inspection** — understand container breakpoints and grid behavior
- **Positioning & Z-Index Demo** — visualize stacking and positioning utilities
- **Effects & Utility Previews** — shadows, opacity, transitions, and more
- **Global Search** — quickly find any utility or token
- **Responsive UI** — works across all screen sizes
- **Developer-Friendly Architecture** — clean, modular, and easy to extend

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| TypeScript | Type safety |
| Vite | Fast dev server & optimized builds |
| Tailwind CSS | Styling & design system |

---

## Project Structure
src/

├── components/ # UI section components

├── data.ts # Design token data

├── types.ts # TypeScript type definitions

├── App.tsx # Root app component

├── main.tsx # Entry point

└── index.css # Global styles

vite.config.ts

tsconfig.json

Getting Started
bash

Clone the repository
git clone https://github.com/your-username/tailwind-visualizer.git

cd tailwind-visualizer

Install dependencies
npm install

Start development server
npm run dev

Other Commands
bash

npm run build # Production build

npm run preview # Preview production build locally

Use Cases
Quick visual reference while building UIs
Teaching Tailwind to new team members
Documenting a project’s design system
Developer portfolio showcase
Roadmap
[ ] Live class playground with real-time preview
[ ] Design token export (JSON / CSS variables)
[ ] Dark / light mode toggle
[ ] Tailwind v4 support
[ ] OpenGraph image generation
[ ] Copy-to-clipboard for class names
Author
Hamidreza

Frontend Developer · UI Engineer · System Builder

License
MIT — free for personal and commercial use.