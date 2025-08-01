# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based personal website using the minimal starter template. The site is configured with TypeScript support using Astro's strict TypeScript configuration.

## Development Commands

- `npm run dev` - Start development server at localhost:4321
- `npm run build` - Build production site to ./dist/
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

## Architecture

### Framework
- **Astro 5.12.6** - Static site generator with island architecture
- **TypeScript** - Configured with strict mode via `astro/tsconfigs/strict`

### Project Structure
- `src/pages/` - File-based routing, each .astro file becomes a route
- `src/pages/posts/` - Blog posts directory (currently empty)
- `public/` - Static assets served directly
- Individual page files exist for: about, favorite-things, photography, reading-lists, software, writing

### Page Architecture
Pages are structured as standard Astro single-file components with frontmatter, HTML, and optional script/style sections. The main index page uses a minimal HTML structure.

### Key Configuration
- Uses ES modules (`"type": "module"` in package.json)
- TypeScript strict mode enabled
- Minimal Astro configuration with default settings