# CRUSH.md - Development Guidelines

## Build/Lint/Test Commands
```bash
# Development
pnpm dev              # Start development server on http://localhost:3000
pnpm build            # Build production application
pnpm start            # Start production server
pnpm lint             # Run ESLint for code quality

# Maintenance
pnpm clean            # Remove .next and node_modules directories
pnpm reinstall        # Clean and reinstall dependencies

# There are currently no test files in the project, so no test command is configured
```

## Code Style Guidelines

### Imports
- Use absolute imports with path aliases defined in tsconfig.json:
  - `@components/*` for components
  - `@app/*` for app directory
  - `@public/*` for public assets
- Place third-party imports first, then absolute imports, then relative imports
- Keep imports organized alphabetically within each group

### Formatting
- Use Prettier defaults with the project's ESLint configuration
- Use single quotes for strings
- Use semicolons at the end of statements
- Use 2-space indentation
- Use trailing commas for multiline objects/arrays

### Types
- Use TypeScript for all components and functions
- Define interfaces for component props
- Use explicit typing rather than `any`
- Define types in the same file when they're component-specific
- Use `React.FC<Props>` for functional components

### Naming Conventions
- Component files: PascalCase (.tsx)
- Component names: PascalCase
- Variables and functions: camelCase
- Constants: UPPER_SNAKE_CASE
- CSS classes: Use Tailwind utility classes primarily
- File names: camelCase for utility files

### Error Handling
- Use try/catch blocks for async operations
- Display user-friendly error messages with react-toastify
- Log detailed errors to console for debugging
- Handle API errors gracefully with appropriate status codes

### Component Structure
- Use functional components with React hooks
- Add 'use client' directive for client-side components
- Use TypeScript interfaces for props
- Follow mobile-first responsive design with Tailwind
- Use DaisyUI components when appropriate

### API Routes
- Use Next.js App Router API route structure
- Validate request data with Zod
- Return appropriate HTTP status codes
- Handle errors with proper error responses

### Git Ignore
- .crush directory added to .gitignore