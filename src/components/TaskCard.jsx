import { formatDate } from '../utils/helpers';
import '../styles/TaskCard.css';

export default function TaskCard({ task, onEdit, onDelete, onDragStart, onDragEnd }) {
  return (
    <div
      className="task-card"
      draggable
      onDragStart={(e) => onDragStart(e, task)}
      onDragEnd={onDragEnd}
    >
      <div className="task-header">
        <div className="task-title">{task.title}</div>
        <div className="task-actions">
          <button className="icon-btn" onClick={() => onEdit(task)} title="Edit">
            ✏️
          </button>
          <button className="icon-btn" onClick={() => onDelete(task)} title="Delete">
            🗑️
          </button>
        </div>
      </div>

      {task.description && (
        <div className="task-description">{task.description}</div>
      )}

      <div className="task-meta">
        <span className={`task-badge priority-${task.priority}`}>
          {task.priority.toUpperCase()}
        </span>
        {task.dueDate && (
          <span className="task-badge task-due">
            📅 {formatDate(task.dueDate)}
          </span>
        )}
      </div>

      {task.tags && task.tags.length > 0 && (
        <div className="task-tags">
          {task.tags.map((tag, idx) => (
            <span key={idx} className="task-tag">#{tag}</span>
          ))}
        </div>
      )}
    </div>
  );
}
