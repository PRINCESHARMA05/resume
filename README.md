# Prince Sharma - Professional Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Contact Form**: Functional contact form with proper validation
- **Smooth Scrolling**: Seamless navigation between sections
- **Download CV**: Easy CV download functionality
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

### Installing Node.js

1. **Windows**: Download and install from [nodejs.org](https://nodejs.org/)
2. **macOS**: Use Homebrew: `brew install node`
3. **Linux**: Use your package manager or download from nodejs.org

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd project
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Education.tsx   # Education section
│   ├── Skills.tsx      # Skills section
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx           # Entry point
├── index.css          # Global styles
└── vite-env.d.ts      # Vite type definitions
```

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Common Issues

1. **"npm is not recognized"**
   - Make sure Node.js is installed properly
   - Restart your terminal/command prompt
   - Check if Node.js is in your system PATH

2. **"Cannot find module 'react'"**
   - Run `npm install` to install dependencies
   - Delete `node_modules` and `package-lock.json`, then run `npm install`

3. **Port already in use**
   - Kill the process using the port: `npx kill-port 5173`
   - Or use a different port: `npm run dev -- --port 3000`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

- **Email**: sharmaprince925771@gmail.com
- **LinkedIn**: [Prince Sharma](https://www.linkedin.com/in/prince-sharma-b4318928a)
- **GitHub**: [PRINCESHARMA05](https://github.com/PRINCESHARMA05)
