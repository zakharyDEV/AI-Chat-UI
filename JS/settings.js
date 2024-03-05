const languageSelect = document.getElementById("language");
const settingsForm = document.getElementById("settings-form");

// Define your translatios
const translations = {
  "en": {
    "sidebarh": "MichelAI",
    "New Conversation": "New Conversation",
    "Saved Conversations": "Saved Conversations",
    "Settings": "Settings",
    "API": "API & Documentation",
    "Help": "Help",
    "settings": "Settings",
    "language": "Language:",
    "theme": "Theme:",
    "save": "Save",
    "Chat": "Chat",
  },
  "fr": {
    "sidebarh": "MichelAI",
    "New Conversation": "Nouvelle conversation", // New Conversation in French
    "Saved Conversations": "Conversations enregistrées", // Saved Conversations in French
    "Settings": "Paramètres", // Settings in French
    "API": "API et documentation", // API & Documentation in French
    "Help": "Aide", // Help in French
    "settings": "Paramètres", // Settings in French
    "language": "Langue :", // Language in French
    "theme": "Thème :", // Theme in French
    "save": "Enregistrer", // Save in French
    "Chat": "Chat",
  },
  "es": {
    "sidebarh": "MichelAI",
    "New Conversation": "Nueva conversación", // New Conversation in Spanish
    "Saved Conversations": "Conversaciones guardadas", // Saved Conversations in Spanish
    "Settings": "Configuraciones", // Settings in Spanish
    "API": "API y documentación", // API & Documentation in Spanish
    "Help": "Ayuda", // Help in Spanish
    "settings": "Configuraciones", // Settings in Spanish
    "language": "Idioma :", // Language in Spanish
    "theme": "Tema :", // Theme in Spanish
    "save": "Guardar", // Save in Spanish
    "Chat": "Chat",
  },
  // Add more translations for other languages
};

// Update page content based on selected language
function updateLanguage(language) {
  const elements = document.querySelectorAll("[data-text]");
  for (const element of elements) {
    if (element) { // Check if element exists before accessing properties
      element.textContent = translations[language][element.dataset.text];
    } else {
      console.warn(`Element with data-text attribute not found: ${element.dataset.text}`);
    }
  }
  // Update title and other elements not using data-text attribute
  document.title = translations[language]["settings"];
}

// Load saved language from localStorage (optional)
const storedLanguage = localStorage.getItem("language");

if (storedLanguage) {
  languageSelect.value = storedLanguage;
  updateLanguage(storedLanguage);
}

// Dispatch event with updated settings
function saveSettings() {
  const selectedLanguage = languageSelect.value;
  const settingsChangedEvent = new CustomEvent("settingsChanged", {
    detail: { language: selectedLanguage },
  });
  window.dispatchEvent(settingsChangedEvent);
}

// Handle form submission
settingsForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const selectedLanguage = languageSelect.value;

  // Save language to storage (optional)
  localStorage.setItem("language", selectedLanguage);

  // Update language based on selection
  updateLanguage(selectedLanguage);
});
