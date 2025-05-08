// Render the onboarding page
export function renderOnboarding(appState) {
  return `
    <div class="page page-onboarding page-transition page-enter">
      <div class="container">
        <div class="header">
          <h1>Plan Your Journey, Your Way!</h1>
          <p class="subtitle">Let's create your personalised travel experience</p>
        </div>
        
        <div class="form-group">
          <label class="form-label">Where would you like to go?</label>
          <div class="input-field">
            <i class="fas fa-map-marker-alt"></i>
            <input type="text" placeholder="Enter Destination" id="destination-input">
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">How long will you stay?</label>
          <div class="dropdown duration-dropdown">
            <button class="dropdown-toggle">
              <span class="dropdown-selected">Select Duration</span>
              <i class="fas fa-chevron-down"></i>
            </button>
            <div class="dropdown-menu">
              <div class="dropdown-item" data-value="weekend">Weekend (1-3 days)</div>
              <div class="dropdown-item" data-value="week">About a week (4-7 days)</div>
              <div class="dropdown-item" data-value="twoweeks">Two weeks (8-14 days)</div>
              <div class="dropdown-item" data-value="month">A month or more (15+ days)</div>
            </div>
          </div>
        </div>
        
        <div class="form-group">
          <label class="form-label">Who are you traveling with?</label>
          <div class="options-grid">
            <div class="option-card ${appState.tripPlan.travelWith === 'solo' ? 'selected' : ''}" data-option="solo">
              <i class="fas fa-user"></i>
              <span>Solo</span>
            </div>
            <div class="option-card ${appState.tripPlan.travelWith === 'couple' ? 'selected' : ''}" data-option="couple">
              <i class="fas fa-user-friends"></i>
              <span>Couple</span>
            </div>
            <div class="option-card ${appState.tripPlan.travelWith === 'family' ? 'selected' : ''}" data-option="family">
              <i class="fas fa-users"></i>
              <span>Family</span>
            </div>
            <div class="option-card ${appState.tripPlan.travelWith === 'friends' ? 'selected' : ''}" data-option="friends">
              <i class="fas fa-user-friends"></i>
              <span>Friends</span>
            </div>
          </div>
        </div>
        
        <button class="btn btn-primary btn-continue">Continue</button>
      </div>
    </div>
  `;
}