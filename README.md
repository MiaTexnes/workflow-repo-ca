# Workflow Repository

This repository contains a venue booking website that has been enhanced with quality assurance tools and testing as part of a workflow course assignment.

## Project Overview

The project is a website for browsing and booking venue accommodations, featuring user authentication, venue listings, and detailed venue information pages. It has been improved with development tools and testing frameworks to ensure code quality and functionality.

## Features

- User authentication (login/register)
- Browse available venues
- View detailed venue information
- Responsive design
- Active page navigation highlighting

## Prerequisites

- Node.js (v16+)
- npm

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone [https://github.com/MiaTexnes/workflow-repo-ca.git]
cd workflow-repo-ca
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   - Create a `.env` file in the root directory based on the `.env.example` template
   - Required environment variables:
     - `API_KEY` - Your API key for the Noroff API
     - `BASE_URL` - Base URL for API requests
     - `USER_EMAIL` - Valid user email for e2e tests
     - `USER_PASSWORD` - Valid user password for e2e tests

### Development

Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run format` - Run Prettier to format code
- `npm run test` - Run Vitest unit tests

## Testing

### Unit Tests (Vitest)

Unit tests check critical functionality including:

- `isActivePath` function for navigation highlighting
- `getUserName` function for user authentication

Run unit tests:

```bash
npm run test
```

### End-to-End Tests (Playwright)

E2E tests verify:

- User login functionality with valid and invalid credentials
- Navigation from home page to venue details

Run e2e tests:

```bash
npx playwright test
```

Run with UI mode:
npx playwright test --ui

Run with browser visible:
npx playwright test --headed

Run a specific test file:
npx playwright test tests/venue-navigation.spec.js

## Code Quality Tools

This project uses the following tools to maintain code quality:

- **ESLint**: Configured to ensure code consistency and catch potential issues
- **Prettier**: Ensures consistent code formatting
- **Pre-commit hooks**: Automatically lint and format code before commits

## Project Structure

```
├── css/               # CSS files
├── js/                # JavaScript files
│   ├── api/           # API integration
│   ├── utils/         # Utility functions
├── tests/             # Test files
│   ├── unit/          # Vitest unit tests
│   ├── e2e/           # Playwright e2e tests
├── login/             # Login page
├── register/          # Registration page
└── venue/             # Venue details page
```

## Workflow Process

This repository was set up following these steps:

1. Forked from the original Noroff repository
2. Created a workflow branch for all changes
3. Set up development tools (ESLint, Prettier, commit hooks)
4. Configured testing frameworks (Vitest, Playwright)
5. Implemented required tests
6. Updated documentation

## Contributing

To contribute to this project:

1. Create a new branch from `workflow`
2. Make your changes
3. Submit a pull request

## Author

[Mia Texnes]
