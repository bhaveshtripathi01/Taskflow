import { useState, useEffect } from 'react';
import { storage } from './utils/storage';
import { STORAGE_KEYS, ACTIVITY_TYPES } from './utils/constants';
import { generateId } from './utils/helpers';
import LoginPage from './components/LoginPage';
import Header from './components/Header';
import Controls from './components/Controls';
import Board from './components/Board';
import TaskModal from './components/TaskModal';
import ActivityLog from './components/ActivityLog';
import './styles/App.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [activities, setActivities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPriority, setFilterPriority] = useState('all');
  const [sortByDate, setSortByDate] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const isLoggedIn = storage.get(STORAGE_KEYS.AUTH, false);
    setIsAuthenticated(isLoggedIn);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      const savedTasks = storage.get(STORAGE_KEYS.TASKS, []);
      const savedActivities = storage.get(STORAGE_KEYS.ACTIVITIES, []);
      setTasks(savedTasks);
      setActivities(savedActivities);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && tasks.length >= 0) {
      storage.set(STORAGE_KEYS.TASKS, tasks);
    }
  }, [tasks, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated && activities.length >= 0) {
      storage.set(STORAGE_KEYS.ACTIVITIES, activities);
    }
  }, [activities, isAuthenticated]);

  const handleLogin = (rememberMe) => {
    setIsAuthenticated(true);
    storage.set(STORAGE_KEYS.AUTH, rememberMe);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    storage.remove(STORAGE_KEYS.AUTH);
  };

  const addActivity = (type, taskTitle) => {
    const activity = {
      id: generateId(),
      type,
      taskTitle,
      timestamp: new Date().toISOString(),
    };
    setActivities(prev => [activity, ...prev].slice(0, 10));
  };

  const handleSaveTask = (taskData) => {
    if (editingTask) {
      setTasks(prev => prev.map(t => 
        t.id === editingTask.id 
          ? { ...t, ...taskData }
          : t
      ));
      addActivity(ACTIVITY_TYPES.EDITED, taskData.title);
    } else {
      const newTask = {
        id: generateId(),
        ...taskData,
        status: 'todo',
        createdAt: new Date().toISOString(),
      };
      setTasks(prev => [...prev, newTask]);
      addActivity(ACTIVITY_TYPES.CREATED, taskData.title);
    }
    setShowModal(false);
    setEditingTask(null);
  };

  const handleDeleteTask = (task) => {
    if (confirm(`Delete task "${task.title}"?`)) {
      setTasks(prev => prev.filter(t => t.id !== task.id));
      addActivity(ACTIVITY_TYPES.DELETED, task.title);
    }
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleMoveTask = (task, newStatus) => {
    setTasks(prev => prev.map(t =>
      t.id === task.id
        ? { ...t, status: newStatus }
        : t
    ));
    addActivity(ACTIVITY_TYPES.MOVED, task.title);
  };

  const handleResetBoard = () => {
    if (confirm('Are you sure you want to reset the board? This will delete all tasks and activities.')) {
      setTasks([]);
      setActivities([]);
      storage.set(STORAGE_KEYS.TASKS, []);
      storage.set(STORAGE_KEYS.ACTIVITIES, []);
    }
  };

  const handleNewTask = () => {
    setEditingTask(null);
    setShowModal(true);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <Header onLogout={handleLogout} onResetBoard={handleResetBoard} />

      <main className="main-content">
        <Controls
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filterPriority={filterPriority}
          onFilterChange={setFilterPriority}
          sortByDate={sortByDate}
          onSortToggle={() => setSortByDate(!sortByDate)}
          onNewTask={handleNewTask}
        />

        <Board
          tasks={tasks}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
          onMoveTask={handleMoveTask}
          searchQuery={searchQuery}
          filterPriority={filterPriority}
          sortByDate={sortByDate}
        />

        <ActivityLog activities={activities} />
      </main>

      {showModal && (
        <TaskModal
          task={editingTask}
          onSave={handleSaveTask}
          onClose={() => {
            setShowModal(false);
            setEditingTask(null);
          }}
        />
      )}
    </div>
  );
}
