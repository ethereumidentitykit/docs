# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Ethereum Identity Kit Documentation** site - a Next.js application built with Nextra (documentation framework) that serves as the official documentation hub for the ethereum-identity-kit library.

## Technology Stack

- **Next.js 15.1.0** with **React 19.0.0** and **TypeScript 5.7.2**
- **Nextra 3.2.5** for documentation framework
- **Tailwind CSS 3.4.16** for styling
- **Bun** as the preferred package manager and runtime
- **ethereum-identity-kit 0.2.48** - the main library being documented

## Essential Commands

```bash
# Development
bun dev                    # Start development server (localhost:3000)

# Build & Production  
bun build                  # Build for production
bun start                  # Start production server

# Code Quality
bun lint                   # Run ESLint
bun format                 # Run Prettier formatting  
bun typecheck             # TypeScript type checking

# Full verification (run before commits)
bun lint && bun format && bun typecheck && bun run build
```

## Setup Requirements

1. **Node.js LTS** (currently 20.x)
2. **Bun runtime** (latest version - run `bun upgrade` first)
3. **Environment setup**: Copy `.env.example` to `.env` (only requires `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID`)

## Architecture

### Documentation Structure
- **pages/docs/** - Main documentation content in MDX format
  - **components/** - Component documentation (Avatar, FollowButton, ProfileCard, etc.)  
  - **hooks/** - React hooks documentation (useFollowButton, useProfileDetails, etc.)
  - **functions/** - Utility functions and API functions
  - **api/** - Public API documentation
  - **services/** - Backend services documentation

### Code Organization
- **components/** - React components for the docs site itself
- **utils/** - Utility functions for the documentation site
- **constants/** - Site configuration and constants
- **lib/** - Library functions
- **public/** - Static assets including logos, screenshots, and LLM exports

### Key Configuration Files
- **theme.config.jsx** - Nextra theme customization
- **next.config.mjs** - Next.js configuration with Nextra integration
- **tailwind.config.ts** - Custom Tailwind configuration with brand colors

## Development Workflow

### Making Documentation Changes
- Documentation content is in **MDX format** in the `pages/` directory
- Navigation is controlled by `_meta.ts` files in each directory
- Components can be imported and used directly in MDX files

### Code Quality Standards
- **TypeScript strict mode** is enabled
- **ESLint** with React and TypeScript rules  
- **Prettier** for consistent formatting
- All code must pass `bun lint && bun typecheck` before committing

### Path Aliases
- Use `@/*` for imports from the root directory
- Example: `import { Component } from '@/components/Component'`

## Special Features

### Nextra Integration
- Automatic sidebar generation from `_meta.ts` files
- Built-in search functionality
- Edit on GitHub links for easy contribution
- MDX support for rich documentation with React components

### Brand & Theming  
- Dark mode only with custom yellow/gold accent colors (#FFFA80, #FDF420)
- Custom grid backgrounds and Tailwind utilities
- Chivo Mono font for monospace text

### External Integrations
- Component playground links to external demo environment
- Discord and Twitter/X social integration  
- GitHub repository links throughout documentation