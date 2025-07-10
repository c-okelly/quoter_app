# 3D Line Simulation Tool

A React-based 3D simulation tool that allows you to create and manipulate lines in 3D space. Built with React, TypeScript, Vite, and Three.js.

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

### Basic Line Creation
- Use the "Line Length" input to set the length of your line
- The line will be centered at the origin and displayed horizontally

### Adding Bends
- **Bend Angle**: Enter the angle in degrees (positive for upward bend, negative for downward)
- **Bend Start**: Specify where along the line the bend should begin (distance from start)
- **Bend Stop**: Specify where the bend should end (must be greater than Bend Start)

### Controls
- The line will automatically update as you change the input values
- The camera will automatically zoom to ensure the entire line is visible
- Line thickness scales with length (1% of length, minimum 5 pixels)

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

### Preview Production Build
```bash
npm run preview
```

## License

This project is licensed under the MIT License.
