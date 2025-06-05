// Theme management functionality
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
}

// Initialize theme on page load
function initializeTheme() {
    let savedTheme = localStorage.getItem('theme') || 'system';

    if (savedTheme === 'system') {
        savedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme(savedTheme);

    const themeToggleInput = document.getElementById('themeSwitch');
    if (savedTheme === 'dark') {
        themeToggleInput.checked = true;
    }
}

// Export functions for global access
window.toggleTheme = toggleTheme;
window.initializeTheme = initializeTheme;