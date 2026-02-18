# TaskFlow - Kanban Task Board

A modern, feature-rich Task Board application built for frontend internship assignment. Features drag-and-drop functionality, persistent storage, and a sleek dark-themed UI.

## Live Demo

[Deploy URL will be added here after deployment]

## Features

### Authentication
- Static login flow with hardcoded credentials
- Email: `intern@demo.com`
- Password: `intern123`
- "Remember me" functionality using localStorage
- Protected routes (redirects to login if not authenticated)
- Logout functionality

### Task Management
- **CRUD Operations**: Create, Read, Update, and Delete tasks
- **Task Properties**:
  - Title (required)
  - Description
  - Priority (Low, Medium, High)
  - Due Date
  - Tags (multiple, comma-separated)
  - CreatedAt timestamp (auto-generated)

### Board Features
- **Three Fixed Columns**: Todo, Doing, Done
- **Drag & Drop**: Move tasks between columns seamlessly
- **Search**: Filter tasks by title (real-time search)
- **Priority Filter**: Show tasks by priority level
- **Date Sorting**: Sort tasks by due date (empty dates appear last)
- **Task Count Badges**: Visual indication of tasks per column

### Data Persistence
- All data persists using localStorage
- Board state survives page refresh
- Handles missing/empty storage gracefully
- Reset Board functionality with confirmation

### Activity Log
- Tracks last 10 actions:
  - Task created
  - Task edited
  - Task moved
  - Task deleted
- Displays relative timestamps (e.g., "5m ago", "2h ago")
- Real-time activity feed

### UI/UX
- Modern dark theme with gradient accents
- Smooth animations and transitions
- Responsive design (mobile-friendly)
- Keyboard accessible
- Visual feedback for all interactions
- Empty states for better UX

## 🛠️ Technology Stack

- **Framework**: React 18 (via CDN)
- **Styling**: Pure CSS with CSS Variables
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: localStorage
- **Build**: Single HTML file (no build step required)

## 📦 Installation & Setup

### Option 1: Direct Browser Open
1. Download or clone the repository
2. Open `task-board.html` in any modern browser
3. Start using the application immediately!

### Option 2: Local Server (Recommended)

