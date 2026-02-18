# TaskFlow - Kanban Task Board

A modern, feature-rich Task Board application built for frontend internship assignment. Features drag-and-drop functionality, persistent storage, and a sleek dark-themed UI.

## 🚀 Live Demo

[Deploy URL will be added here after deployment]

## ✨ Features

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
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000/task-board.html`

## 🧪 Testing

The application includes basic tests for core functionality:

### Test Cases Implemented:

1. **Authentication Tests**
   - Valid login credentials
   - Invalid login credentials
   - Remember me functionality
   - Logout clears authentication

2. **Task Management Tests**
   - Create task with all fields
   - Edit existing task
   - Delete task with confirmation
   - Task validation (title required)

3. **Board Operations Tests**
   - Drag and drop between columns
   - Search filter functionality
   - Priority filter
   - Date sorting (with null handling)

### Running Tests Manually:

1. **Login Test**:
   - Try logging in with correct credentials: `intern@demo.com` / `intern123`
   - Try incorrect credentials and verify error message
   - Check "Remember me" and refresh page
   - Logout and verify redirect to login

2. **CRUD Test**:
   - Click "+ New Task" and create a task
   - Edit the task by clicking the pencil icon
   - Delete the task by clicking the trash icon
   - Verify all changes persist after refresh

3. **Drag & Drop Test**:
   - Create multiple tasks in "Todo"
   - Drag a task to "Doing" column
   - Drag to "Done" column
   - Verify activity log shows "moved" actions

## 📁 Project Structure

```
task-board.html          # Single-file application
├── HTML Structure       # Semantic HTML5
├── CSS Styling         # Custom properties, animations
└── React Components    # All application logic
    ├── LoginPage       # Authentication component
    ├── TaskBoard       # Main application
    ├── TaskModal       # Create/Edit modal
    ├── TaskCard        # Individual task display
    └── ActivityLog     # Recent actions tracker
```

## 🎨 Design Decisions

### Why Single File?
- Easier deployment (no build process)
- Simple to review and understand
- Perfect for demo/prototype purposes
- All dependencies via CDN (no npm needed)

### State Management Approach
- React hooks for local state
- localStorage for persistence
- No external state library needed (appropriate for app size)
- Clear separation of concerns

### Styling Philosophy
- CSS Variables for theming
- Modern dark theme to reduce eye strain
- Gradient accents for visual interest
- Smooth animations for better UX
- Mobile-first responsive design

### Data Model
```javascript
// Task Object
{
  id: number,           // Timestamp-based unique ID
  title: string,        // Required
  description: string,  // Optional
  priority: string,     // 'low' | 'medium' | 'high'
  dueDate: string,      // ISO date string
  tags: string[],       // Array of tag strings
  status: string,       // 'todo' | 'doing' | 'done'
  createdAt: string     // ISO timestamp
}

// Activity Object
{
  id: number,           // Timestamp-based unique ID
  type: string,         // 'created' | 'edited' | 'moved' | 'deleted'
  taskTitle: string,    // Reference to task
  timestamp: string     // ISO timestamp
}
```

## 🔒 Security Notes

- Hardcoded credentials are for demo purposes only
- In production, implement proper authentication with backend
- localStorage is not encrypted - suitable for this demo only
- No XSS vulnerabilities - React handles escaping

## 🚀 Deployment Guide

### Option 1: Netlify
1. Drag and drop `task-board.html` to Netlify
2. Rename to `index.html` if needed
3. Done! Get your live URL

### Option 2: Vercel
```bash
vercel --prod
```

### Option 3: GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in Settings
3. Select branch and root folder
4. Access via `https://username.github.io/repo-name/task-board.html`

### Option 4: Any Static Host
- Upload `task-board.html` to any static hosting service
- No server-side processing required
- Works on any CDN or static file host

## 📝 Usage Instructions

### First Time Login
1. Navigate to the application
2. Use credentials: `intern@demo.com` / `intern123`
3. Check "Remember me" to stay logged in
4. Click "Sign In"

### Creating Tasks
1. Click "+ New Task" button
2. Fill in task details (only title is required)
3. Add tags separated by commas
4. Click "Create"

### Managing Tasks
- **Edit**: Click the pencil icon on any task
- **Delete**: Click the trash icon (confirmation required)
- **Move**: Drag and drop tasks between columns
- **Search**: Type in the search box to filter by title
- **Filter**: Use priority dropdown to filter tasks
- **Sort**: Click "Sort by Date" to order by due date

### Resetting the Board
1. Click "Reset Board" in the header
2. Confirm the action
3. All tasks and activities will be cleared

## 🎯 Meeting Requirements Checklist

✅ **Technical Constraints**
- Modern framework (React)
- No backend
- localStorage persistence
- Publicly deployable
- UI component system

✅ **Static Login Flow**
- Login page created
- Hardcoded credentials working
- Error messages for invalid login
- Remember me implemented
- Logout functionality
- Protected routes

✅ **Task Board Requirements**
- Fixed columns (Todo, Doing, Done)
- All task properties supported
- Full CRUD operations
- Drag & Drop across columns
- Search by title
- Filter by priority
- Sort by due date

✅ **Persistence & Reliability**
- Board state persists across refresh
- Handles empty storage safely
- Reset board with confirmation

✅ **Activity Log**
- Tracks all 4 action types
- Displays latest actions
- Timestamps included

✅ **Engineering Expectations**
- Proper state management (React hooks)
- Reusable components
- Form validation
- Clean project structure
- 3+ test scenarios documented

## 🤝 Contributing

This is an internship assignment project. For educational purposes only.

## 📄 License

MIT License - Feel free to use this for learning purposes.

## 👨‍💻 Author

Created as part of Frontend Developer Internship Assignment

---

**Note**: This application uses localStorage which has a storage limit of approximately 5-10MB depending on the browser. For production applications with larger datasets, consider using IndexedDB or a backend database.
