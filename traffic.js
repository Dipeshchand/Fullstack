function showTab(tabId) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(tab => tab.style.display = 'none');
  
    // Show the selected tab
    const selectedTab = document.getElementById(tabId);
    selectedTab.style.display = 'block';
}
  