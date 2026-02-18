import { useState } from 'react';
import { COLUMNS, COLUMN_LABELS } from '../utils/constants';
import { filterBySearch, filterByPriority, sortByDueDate } from '../utils/helpers';
import TaskCard from './TaskCard';
import '../styles/Board.css';

export default function Board({ 
  tasks, 
  onEditTask, 
  onDeleteTask, 
  onMoveTask,
  searchQuery,
  filterPriority,
  sortByDate 
}) {
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (e, task) => {
    setDraggedTask(task);
    e.currentTarget.classList.add('dragging');
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove('dragging');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, status) => {
    e.preventDefault();
    if (draggedTask && draggedTask.status !== status) {
      onMoveTask(draggedTask, status);
    }
    setDraggedTask(null);
  };

  const getFilteredTasks = (status) => {
    let filtered = tasks.filter(t => t.status === status);

    // Apply search filter
    filtered = filterBySearch(filtered, searchQuery);

    // Apply priority filter
    filtered = filterByPriority(filtered, filterPriority);

    // Apply date sorting
    if (sortByDate) {
      filtered = sortByDueDate(filtered);
    }

    return filtered;
  };

  return (
    <div className="board">
      {COLUMNS.map(status => {
        const columnTasks = getFilteredTasks(status);
        return (
          <div
            key={status}
            className={`column ${status}`}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, status)}
          >
            <div className="column-header">
              <div className="column-title">
                {COLUMN_LABELS[status]}
              </div>
              <div className="column-badge">{columnTasks.length}</div>
            </div>
            <div className="tasks-container">
              {columnTasks.length === 0 ? (
                <div className="empty-state">
                  <div className="empty-state-icon">📝</div>
                  <div>No tasks here</div>
                </div>
              ) : (
                columnTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    onEdit={onEditTask}
                    onDelete={onDeleteTask}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                  />
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
