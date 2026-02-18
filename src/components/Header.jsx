import '../styles/Header.css';

export default function Header({ onLogout, onResetBoard }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">TaskFlow</div>
      </div>
      <div className="header-right">
        <button className="btn btn-ghost" onClick={onResetBoard}>
          🔄 Reset Board
        </button>
        <button className="btn btn-secondary" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}
