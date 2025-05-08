export function renderProfile(appState) {
  const { user } = appState;
  
  return `
    <div class="page profile-page">
      <div class="profile-header">
        <div class="avatar">${user.avatar}</div>
        <h1>${user.name}'s Profile</h1>
      </div>

      <div class="profile-content">
        <section class="profile-info">
          <div class="info-card">
            <h2>Personal Information</h2>
            <div class="info-group">
              <label>Name</label>
              <input type="text" value="${user.name}" id="profile-name" disabled>
              <button class="btn btn-outlined edit-btn" onclick="toggleEdit('profile-name')">
                <i class="fas fa-edit"></i>
              </button>
            </div>
            <div class="info-group">
              <label>Email</label>
              <input type="email" value="user@example.com" id="profile-email" disabled>
              <button class="btn btn-outlined edit-btn" onclick="toggleEdit('profile-email')">
                <i class="fas fa-edit"></i>
              </button>
            </div>
          </div>
        </section>

        <section class="travel-stats">
          <h2>Travel Statistics</h2>
          <div class="stats-grid">
            <div class="stat-card">
              <i class="fas fa-plane"></i>
              <span class="stat-value">12</span>
              <span class="stat-label">Trips</span>
            </div>
            <div class="stat-card">
              <i class="fas fa-map-marker-alt"></i>
              <span class="stat-value">8</span>
              <span class="stat-label">Countries</span>
            </div>
            <div class="stat-card">
              <i class="fas fa-hotel"></i>
              <span class="stat-value">24</span>
              <span class="stat-label">Hotels</span>
            </div>
          </div>
        </section>

        <section class="preferences">
          <h2>Travel Preferences</h2>
          <div class="preferences-grid">
            <div class="preference-card">
              <label>
                <input type="checkbox" checked>
                Email Notifications
              </label>
            </div>
            <div class="preference-card">
              <label>
                <input type="checkbox" checked>
                Push Notifications
              </label>
            </div>
            <div class="preference-card">
              <label>
                <input type="checkbox">
                Newsletter
              </label>
            </div>
          </div>
        </section>

        <button class="btn btn-primary save-profile">Save Changes</button>
      </div>
    </div>
  `;
}