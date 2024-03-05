// Function to save settings when the form is submitted
document.getElementById("ai-settings-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form data
    const aiName = document.getElementById("ai-name").value;
    const aiDescription = document.getElementById("ai-description").value;
    const aiTone = document.getElementById("ai-tone").value;
    const aiContext = document.getElementById("ai-context").value;
    const aiVocabulary = document.getElementById("ai-vocabulary").value;
    const aiMemory = document.getElementById("ai-memory").value;
  
    // Store settings in localStorage
    localStorage.setItem("aiSettings", JSON.stringify({
      aiName,
      aiDescription,
      aiTone,
      aiContext,
      aiVocabulary,
      aiMemory
    }));
  
    // Close the popup or provide a success message
    closePopup(); // Assuming you have a function to close the popup
    // Or display a success message to the user
  });
  
  // Function to retrieve saved settings when the page loads
  window.addEventListener("load", function() {
    const savedSettings = localStorage.getItem("aiSettings");
    if (savedSettings) {
      const parsedSettings = JSON.parse(savedSettings);
      document.getElementById("ai-name").value = parsedSettings.aiName;
      document.getElementById("ai-description").value = parsedSettings.aiDescription;
      document.getElementById("ai-tone").value = parsedSettings.aiTone;
      document.getElementById("ai-context").value = parsedSettings.aiContext;
      document.getElementById("ai-vocabulary").value = parsedSettings.aiVocabulary;
      document.getElementById("ai-memory").value = parsedSettings.aiMemory;
    }
  });
  