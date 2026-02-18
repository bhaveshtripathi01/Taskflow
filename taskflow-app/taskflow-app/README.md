# TaskFlow - Kanban Task Board (React Version)

A modern, feature-rich Task Board application built with React and Vite. Features drag-and-drop functionality, persistent storage, and a sleek dark-themed UI.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will open at `http://localhost:3000`

## 📁 Project Structure

```
taskflow-app/
├── src/
│   ├── components/          # React components
│   │   ├── LoginPage.jsx    # Authentication page
│   │   ├── Header.jsx       # App header with logout
│   │   ├── Controls.jsx     # Search, filters, sort controls
│   │   ├── Board.jsx        # Kanban board with columns
│   │   ├── TaskCard.jsx     # Individual task display
│   │   ├── TaskModal.jsx    # Create/Edit task modal
│   │   └── ActivityLog.jsx  # Recent actions tracker
│   ├── utils/               # Utility functions
│   │   ├── storage.js       # localStorage wrapper
│   │   ├── constants.js     # App constants
│   │   └── helpers.js       # Helper functions
│   ├── styles/              # CSS modules
│   │   ├── index.css        # Global styles
│   │   ├── App.css          # App container styles
│   │   ├── LoginPage.css
│   │   ├── Header.css
│   │   ├── Controls.css
│   │   ├── Board.css
│   │   ├── TaskCard.css
│   │   ├── TaskModal.css
│   │   └── ActivityLog.css
│   ├── App.jsx              # Main app component
│   └── main.jsx             # App entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── package.json             # Dependencies
└── README.md
```

## ✨ Features

### Authentication
- Static login flow with hardcoded credentials
- **Email**: `intern@demo.com`
- **Password**: `intern123`
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

## 🎨 Component Architecture

### Component Hierarchy
```
App
├── LoginPage (conditional)
└── Authenticated View
    ├── Header
    ├── Controls
    ├── Board
    │   └── TaskCard (multiple)
    ├── ActivityLog
    └── TaskModal (conditional)
```

### Key Design Patterns

**State Management**
- React hooks (useState, useEffect)
- Lift state up pattern for shared data
- Controlled components for forms

**Component Communication**
- Props for parent-to-child
- Callbacks for child-to-parent
- Context could be added for deeper nesting

**Side Effects**
- useEffect for localStorage sync
- useEffect for authentication check
- Cleanup functions where needed

## 🧪 Testing

### Manual Testing Checklist

1. **Authentication**
   - ✅ Valid login credentials work
   - ✅ Invalid credentials show error
   - ✅ Remember me persists session
   - ✅ Logout clears session

2. **Task CRUD**
   - ✅ Create task with all fields
   - ✅ Create task with only title
   - ✅ Edit existing task
   - ✅ Delete task with confirmation
   - ✅ Form validation works

3. **Board Operations**
   - ✅ Drag and drop between columns
   - ✅ Search filters tasks
   - ✅ Priority filter works
   - ✅ Date sorting (nulls last)
   - ✅ Filters combine correctly

4. **Persistence**
   - ✅ Data survives refresh
   - ✅ Empty storage handled
   - ✅ Reset board clears data

5. **Activity Log**
   - ✅ Tracks all action types
   - ✅ Shows last 10 only
   - ✅ Timestamps update

## 🚀 Deployment

### Deploy to Netlify

```bash
# Build the app
npm run build

# Deploy the dist folder to Netlify
# Or drag-and-drop the dist folder to Netlify
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

## 🔧 Configuration

### Environment Variables (Optional)

Create `.env` file:
```
VITE_APP_TITLE=TaskFlow
```

Access in code:
```javascript
const title = import.meta.env.VITE_APP_TITLE
```

### Vite Configuration

Edit `vite.config.js` to customize:
- Port number
- Build output directory
- Asset handling
- Plugin options

## 🎯 Code Quality

### File Organization
- ✅ Components in separate files
- ✅ Utilities extracted to helpers
- ✅ Constants centralized
- ✅ CSS modular by component

### Best Practices
- ✅ Semantic HTML
- ✅ Accessible forms and buttons
- ✅ Responsive design
- ✅ Error handling
- ✅ Clean code structure
- ✅ Meaningful variable names
- ✅ Comments where needed

## 📝 Assignment Requirements

✅ **Technical Constraints**
- React framework
- localStorage persistence
- Publicly deployable
- No backend required

✅ **All Features**
- Static login flow
- Task board with CRUD
- Drag & drop
- Search & filters
- Activity tracking
- Data persistence

✅ **Engineering Quality**
- Proper state management
- Reusable components
- Form validation
- Clean structure
- Tests documented

## 🤝 Contributing

This is an internship assignment project.

## 📄 License

MIT License

---

**Login Credentials**:
- Email: `intern@demo.com`
- Password: `intern123`

Built with ❤️ using React + Vite
