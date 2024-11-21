document.addEventListener('DOMContentLoaded', () => {
    let darkmode = localStorage.getItem('darkmode');
    const themeSwitch = document.getElementById('theme-switch');
  
    const enableDarkmode = () => {
      document.body.classList.add('darkmode');
      localStorage.setItem('darkmode', 'active');
      themeSwitch.textContent = 'Light Mode'; // Change button text to 'Light Mode'
    };
  
    const disableDarkmode = () => {
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkmode', null);
      themeSwitch.textContent = 'Dark Mode'; // Change button text to 'Dark Mode'
    };
  
    // Check the current theme and apply dark mode if it's active
    if (darkmode === 'active') {
      enableDarkmode();
    } else {
      themeSwitch.textContent = 'Dark Mode'; // Ensure correct initial text
    }
  
    // Add an event listener to toggle between light and dark modes
    themeSwitch.addEventListener('click', () => {
      darkmode = localStorage.getItem('darkmode');
      darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
    });
  });
  
