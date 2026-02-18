import { PRIORITIES } from '../utils/constants';
import '../styles/Controls.css';

export default function Controls({ 
  searchQuery, 
  onSearchChange,
  filterPriority,
  onFilterChange,
  sortByDate,
  onSortToggle,
  onNewTask
}) {
  return (
    <div className="controls-section">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <select
          className="filter-select"
          value={filterPriority}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="all">All Priorities</option>
          {PRIORITIES.map(priority => (
            <option key={priority} value={priority}>
              {priority.charAt(0).toUpperCase() + priority.slice(1)}
            </option>
          ))}
        </select>

        <button
          className={`btn ${sortByDate ? 'btn-primary' : 'btn-secondary'}`}
          onClick={onSortToggle}
        >
          📅 Sort by Date
        </button>

        <button className="btn btn-primary" onClick={onNewTask}>
          + New Task
        </button>
      </div>
    </div>
  );
}
