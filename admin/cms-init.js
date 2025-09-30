// Initialize CMS with existing content
document.addEventListener('DOMContentLoaded', function() {
  // Wait for CMS to load
  setTimeout(() => {
    if (window.CMS) {
      console.log('CMS loaded, initializing with existing content...');
      
      // This will run after CMS initialization
      window.CMS.registerEventListener('init', ({ data }) => {
        console.log('CMS initialized:', data);
        
        // If test-repo is empty, pre-populate with existing content
        const backend = window.CMS.getBackend();
        if (backend && backend.repo === 'test-repo') {
          
          // Check if content exists
          backend.entriesByFolder('content/case-studies', 'case_studies')
            .then(entries => {
              console.log('Found entries:', entries.length);
              if (entries.length === 0) {
                console.log('No entries found, would populate here...');
                // In a real implementation, you could programmatically create entries
                // For now, we'll show a message to the user
              }
            })
            .catch(err => {
              console.log('Error checking entries:', err);
            });
        }
      });
    }
  }, 2000);
});