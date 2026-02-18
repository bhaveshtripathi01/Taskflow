# TaskFlow - Quick Setup Guide

## What You Got

You have TWO versions of the application:

### 1. **Single HTML File** (`task-board.html`)
- **Best for**: Quick testing, simple deployment
- **How to use**: Just open the file in a browser
- **Deploy**: Upload to Netlify/Vercel as-is

### 2. **React Project** (`taskflow-app/` folder)
- **Best for**: Professional submission, code review
- **Requires**: Node.js installation
- **Structure**: Organized components, modular code

---

## 🚀 Quick Start Options

### Option A: Test Immediately (HTML Version)

1. Double-click `task-board.html`
2. Login with: `intern@demo.com` / `intern123`
3. Done! 

### Option B: Run React Project

```bash
# 1. Open terminal in taskflow-app folder
cd taskflow-app

# 2. Install dependencies (first time only)
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:3000
```

---

## 📤 Deployment Guide

### **Easiest: Netlify Drop

1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop EITHER:
   - `task-board.html` (rename to `index.html`)
   - OR the built React app's `dist` folder
3. Get your live URL instantly! 🎉

### **For React Version:

```bash
# Build the project first
cd taskflow-app
npm run build

# This creates a 'dist' folder
# Upload the 'dist' folder to Netlify
```

### **Alternative: Vercel**

```bash
cd taskflow-app
npm install -g vercel
vercel --prod