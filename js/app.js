import { renderStatusBar } from './components/statusBar.js';
import { renderOnboarding } from './pages/onboarding.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderProfile } from './pages/profile.js';
import { getPreferredTheme, setTheme } from './utils/theme.js';

// Initialize app state
const appState = {
  currentPage: 'onboarding',
  theme: getPreferredTheme(),
  user: {
    name: 'Chhavi',
    avatar: 'C'
  },
  tripPlan: {
    destination: '',
    duration: '',
    travelWith: '',
    dateRange: '',
  },
  trips: [
    {
      id: 1,
      destination: 'Tokyo',
      image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg',
      dateRange: '27.01.2025 - 02.02.2025',
      days: 6,
      distance: '4 034',
      documents: 3,
      flight: {
        date: '26.01.2025',
        time: '10:50 am',
        departure: {
          code: 'DEL',
          city: 'Delhi',
          country: 'India'
        },
        arrival: {
          code: 'NRT',
          city: 'Narita',
          country: 'Tokyo'
        }
      },
      hotels: [
        {
          name: 'Shinagawa Prince Hotel',
          image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg',
          checkIn: '26.01.2025, 1:15 pm',
          checkOut: '28.01.2025, 11:5 am',
          nights: 2,
          status: 'confirmed'
        },
        {
          name: 'Mercure Tokyo Hotel',
          image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
          checkIn: '28.01.2025, 6:00 pm',
          checkOut: '30.01.2025, 11:00 am',
          nights: 2,
          status: 'pending'
        }
      ],
      activities: [
        {
          day: 1,
          date: '27.01.2025',
          items: [
            {
              title: 'Senso-ji Temple & Nakamise Shopping Street',
              time: '9:00 am Morning',
              duration: '3 hours',
              location: 'Pick up: From Hotel'
            },
            {
              title: 'Tokyo Sky Tree',
              time: '1:00 pm Afternoon',
              duration: '3 hours',
              location: 'Tokyo, Sumida, Oshiage Street'
            },
            {
              title: 'Kimono Wearing',
              time: 'Anytime before 8:00pm',
              duration: '1.5 hours',
              location: 'Pick up: From Hotel'
            }
          ]
        }
      ]
    }
  ]
};

// Initialize app
function initApp() {
  setTheme(appState.theme);
  renderApp();
}

// Event delegation for the entire app
document.addEventListener('click', (event) => {
  // Navigate to dashboard when continue button is clicked
  if (event.target.matches('.btn-continue')) {
    navigateTo('dashboard');
  }
  
  // Handle option selection for travel companions
  if (event.target.closest('.option-card')) {
    const optionCard = event.target.closest('.option-card');
    const travelWith = optionCard.dataset.option;
    
    // Update app state
    appState.tripPlan.travelWith = travelWith;
    
    // Update UI
    document.querySelectorAll('.option-card').forEach(card => {
      card.classList.remove('selected');
    });
    optionCard.classList.add('selected');
  }
  
  // Handle dropdown toggle
  if (event.target.closest('.dropdown-toggle')) {
    const dropdown = event.target.closest('.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    
    dropdownMenu.classList.toggle('show');
    dropdownToggle.classList.toggle('active');
  }
  
  // Handle dropdown item selection
  if (event.target.closest('.dropdown-item')) {
    const dropdown = event.target.closest('.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const selectedValue = event.target.dataset.value;
    const selectedText = event.target.textContent;
    
    // Update dropdown toggle text and close dropdown
    dropdown.querySelector('.dropdown-selected').textContent = selectedText;
    dropdownMenu.classList.remove('show');
    dropdownToggle.classList.remove('active');
    
    // Update app state based on which dropdown was selected
    if (dropdown.classList.contains('duration-dropdown')) {
      appState.tripPlan.duration = selectedValue;
    }
  }

  // Handle profile edit buttons
  if (event.target.closest('.edit-btn')) {
    const inputId = event.target.closest('.edit-btn').getAttribute('onclick').match(/'([^']+)'/)[1];
    const input = document.getElementById(inputId);
    input.disabled = !input.disabled;
    input.focus();
  }

  // Handle profile save button
  if (event.target.matches('.save-profile')) {
    saveProfile();
  }
});

// Function to navigate between pages
function navigateTo(page) {
  const appElement = document.getElementById('app');
  const currentPage = appElement.querySelector('.page');
  
  // Add exit animation to current page
  if (currentPage) {
    currentPage.classList.add('page-exit');
    
    // Wait for animation to complete before rendering new page
    setTimeout(() => {
      appState.currentPage = page;
      renderApp();
    }, 300);
  } else {
    appState.currentPage = page;
    renderApp();
  }
}

// Function to save profile changes
function saveProfile() {
  const name = document.getElementById('profile-name').value;
  const email = document.getElementById('profile-email').value;

  // Update app state
  appState.user.name = name;

  // Here you would typically make an API call to update the backend
  console.log('Saving profile...', { name, email });

  // Show success message
  alert('Profile updated successfully!');
}

// Render the app based on current state
function renderApp() {
  const appElement = document.getElementById('app');
  let content = '';
  
  // Render status bar
  content += renderStatusBar();
  
  // Render current page
  if (appState.currentPage === 'onboarding') {
    content += renderOnboarding(appState);
  } else if (appState.currentPage === 'dashboard') {
    content += renderDashboard(appState);
  } else if (appState.currentPage === 'profile') {
    content += renderProfile(appState);
  }
  
  appElement.innerHTML = content;
  
  // Add entrance animation
  const newPage = appElement.querySelector('.page');
  if (newPage) {
    setTimeout(() => {
      newPage.classList.add('page-visible');
    }, 10);
  }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);

// Export for other modules
export { navigateTo, appState };