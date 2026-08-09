document.addEventListener("DOMContentLoaded", function () {
  const sidebarContainer = document.getElementById("sidebar-container");

  if (sideContainer) {
    sidebarContainer.innerHTML = `
      <aside class="sidebar">
        <div class="brand">
          <h2>Pith</h2>
          <span class="badge">Coder Mode</span>
        </div>

        <nav class="nav-links">
          <a href="coder.html" class="nav-item active">Coder Bot</a>
        </nav>

        <div class="history-section">
          <h3>Recent Chats</h3>
          <ul class="history-list">
            <li>HTML & CSS Setup</li>
            <li>Fixing Grid Layout</li>
          </ul>
        </div>
      </aside>
    `;
  }
});
