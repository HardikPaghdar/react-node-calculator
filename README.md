# React + Node.js Demo: Articles and Comments

The existing documentation describes a task for creating an article and multiple comments, alongside a Create React App frontend. The repository name may not reflect the current project scope; verify the current UI and API before describing it as a calculator app.

## Requirements

- Node.js and npm (or Yarn if the maintained lockfile uses Yarn)

## Frontend

Run these commands from the directory containing the frontend `package.json`:

```bash
npm install
npm start
```

The Create React App development server normally runs at [http://localhost:3000](http://localhost:3000).

## Backend

Install dependencies in the backend directory and use the scripts defined in its `package.json`. Configure the frontend API base URL to match the backend's local port. Keep credentials in an untracked local `.env` file.

## Tests and build

Run the scripts defined in the relevant package file. Frontend projects using Create React App commonly provide:

```bash
npm test
npm run build
```

## Before deployment

Verify server-side input validation, consistent API errors, authorization where required, automated tests, and environment-based configuration. Do not commit credentials, dependency folders, or production data. Confirm exact folder names and commands against the current source before relying on this README.
