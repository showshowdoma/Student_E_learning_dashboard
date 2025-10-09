// Simple UI interactions
  const page = document.getElementById('page');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobileOverlay');

  function toggleMobileSidebar(force) {
  // Only allow the menu button to work on small screens
  if (window.innerWidth < 980) {
    const show = force !== undefined ? force : !sidebar.classList.contains('show');
    sidebar.classList.toggle('show', show);
    overlay.style.display = show ? 'block' : 'none';
  } else {
    // Do nothing on big screens
    return;
  }
}  


  function toggleTheme() {
    document.documentElement.classList.toggle('dark');
  }

  // Close mobile sidebar when resizing to large screens
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 980) {
      sidebar.classList.remove('show');
      overlay.style.display = 'none';
    }
  });

  // Accessibility: close sidebar with ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      sidebar.classList.remove('show');
      overlay.style.display = 'none';
    }
  });

