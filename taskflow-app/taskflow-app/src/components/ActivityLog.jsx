import { formatRelativeTime } from '../utils/helpers';
import '../styles/ActivityLog.css';

export default function ActivityLog({ activities }) {
  return (
    <div className="activity-section">
      <div className="activity-header">
        <div className="activity-title">Recent Activity</div>
      </div>
      <div className="activity-list">
        {activities.length === 0 ? (
          <div className="empty-state">
            <div>No recent activity</div>
          </div>
        ) : (
          activities.map(activity => (
            <div key={activity.id} className="activity-item">
              <div className={`activity-icon ${activity.type}`}></div>
              <div className="activity-text">
                Task "{activity.taskTitle}" was {activity.type}
              </div>
              <div className="activity-time">
                {formatRelativeTime(activity.timestamp)}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
