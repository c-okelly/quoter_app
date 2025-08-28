# Quote Tool

A React-based 3D simulation tool that allows you to create and manipulate lines in 3D space. Built with React, TypeScript, Vite, and Three.js.

> **Note**: This package is published to GitHub Package Registry. Replace `GITHUB_USERNAME` with your actual GitHub username in the installation and import statements.

## Installation

```bash
npm install @GITHUB_USERNAME/quote-tool
```

## Usage

```jsx
import React from 'react';
import { QuoteTool } from '@GITHUB_USERNAME/quote-tool';

function App() {
  return (
    <div>
      <h1>My 3D Line Tool</h1>
      <QuoteTool />
    </div>
  );
}
```

## Development

## Features

- Create lines with customizable length
- Add bends to lines with specified angle and position
- Real-time 3D visualization
- Automatic camera zoom to fit content
- Dynamic line thickness (1% of length with minimum of 5)

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd quote-tool
```

2. Install dependencies:
```bash
npm install
```

3. Install Three.js (required for 3D graphics):
```bash
npm install three @types/three
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Usage

TODO

## Development

### Project Structure
```
src/
├── App.tsx          # Main 3D line simulation component
├── main.tsx         # Application entry point
├── index.css        # Global styles
└── assets/          # Static assets
```

### Technologies Used
- **React**: UI framework
- **TypeScript**: Type safety
- **Vite**: Build tool and development server
- **Three.js**: 3D graphics library

### Building for Production
```bash
npm run build
```

## License

This project is licensed under the MIT License.
