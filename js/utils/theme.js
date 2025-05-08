// Get the preferred theme from localStorage or system preference
export function getPreferredTheme() {
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme) {
    return savedTheme;
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark-theme';
  }
  
  return 'light-theme';
}

// Set theme on the body element and save to localStorage
export function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

// Toggle between light and dark themes
export function toggleTheme() {
  const currentTheme = document.body.className;
  const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
  
  setTheme(newTheme);
  return newTheme;
}