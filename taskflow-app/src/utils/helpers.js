/**
 * Format timestamp to relative time (e.g., "5m ago", "2h ago")
 */
export const formatRelativeTime = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  const minutes = Math.floor(diff / 60000);
  
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  
  return date.toLocaleDateString();
};

/**
 * Format date to readable string
 */
export const formatDate = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString();
};

/**
 * Generate unique ID based on timestamp
 */
export const generateId = () => {
  return Date.now();
};

/**
 * Sort tasks by due date (empty dates last)
 */
export const sortByDueDate = (tasks) => {
  return [...tasks].sort((a, b) => {
    if (!a.dueDate) return 1;
    if (!b.dueDate) return -1;
    return new Date(a.dueDate) - new Date(b.dueDate);
  });
};

/**
 * Filter tasks by search query
 */
export const filterBySearch = (tasks, query) => {
  if (!query) return tasks;
  const lowerQuery = query.toLowerCase();
  return tasks.filter(task => 
    task.title.toLowerCase().includes(lowerQuery)
  );
};

/**
 * Filter tasks by priority
 */
export const filterByPriority = (tasks, priority) => {
  if (!priority || priority === 'all') return tasks;
  return tasks.filter(task => task.priority === priority);
};

/**
 * Parse tags from comma-separated string
 */
export const parseTags = (tagsString) => {
  if (!tagsString) return [];
  return tagsString
    .split(',')
    .map(tag => tag.trim())
    .filter(Boolean);
};
