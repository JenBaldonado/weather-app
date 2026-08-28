

function Sidepane() {
  return (
    <>
      {/*  <!-- Sidebar --> */}
      <aside className="sidebar">
        <a href="/" className="brand" aria-label="Nimbus home">
          <span className="brand-icon">☁️</span>
          <span className="brand-name">Nimbus</span>
        </a>

        <nav className="sidebar-nav" aria-label="Main navigation">
          <a href="#" className="nav-link active">
            <span className="nav-icon">⌂</span>
            <span>Today</span>
          </a>

          <a href="#" className="nav-link">
            <span className="nav-icon">▣</span>
            <span>Forecast</span>
          </a>

          <a href="#" className="nav-link">
            <span className="nav-icon">⌖</span>
            <span>Maps</span>
          </a>

          <a href="#" className="nav-link">
            <span className="nav-icon">♢</span>
            <span>Favorites</span>
          </a>
        </nav>

        <button className="unit-selector" type="button">
          <span>°C</span>
          <span aria-hidden="true">⌄</span>
        </button>
      </aside>
    </>
  );
}

export default Sidepane;
