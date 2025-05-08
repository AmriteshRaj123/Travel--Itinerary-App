// Render the status bar component
export function renderStatusBar() {
  const currentTime = getCurrentTime();
  
  return `
    <div class="status-bar">
      <div class="time">${currentTime}</div>
      <div class="icons">
        <i class="fas fa-signal"></i>
        <i class="fas fa-wifi"></i>
        <i class="fas fa-battery-full"></i>
      </div>
    </div>
  `;
}

// Helper function to get current time in 24-hour format
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  
  // Pad with zero if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  
  return `${hours}:${minutes}`;
}