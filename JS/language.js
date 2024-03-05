// Define translations (replace with your actual translations)
const translations = {
    "en": {
        "title": "Interactive Chat with MichelAI",
        "michelai": "MichelAI",
        "newconversation": "New Conversation",
        "savedconversations": "Saved Conversations",
        "settings": "Settings",
        "apidoc": "API & Documentation",
        "help": "Help",
        "conversationh": "Chat with MichelAI",
        "typemessage": "Type your message here...",
        "aisettings": "AI Settings",
        "ainame": "AI Name:",
        "aidescription": "AI Description:",
        "aicone": "AI Tone:",
        "aicontext": "AI Context:",
        "aivocabulary": "AI Vocabulary:",
        "aimemory": "AI Memory:",
        "savesettings": "Save Settings"
      },
      "fr": {
        "title": "Conversation interactive avec MichelAI",
        "michelai": "MichelAI",
        "newconversation": "Nouvelle conversation",
        "savedconversations": "Conversations enregistrées",
        "settings": "Paramètres",
        "apidoc": "API et documentation",
        "help": "Aide",
        "conversationh": "Discuter avec MichelAI",
        "typemessage": "Tapez votre message ici...",
        "aisettings": "Paramètres IA",
        "ainame": "Nom de l'IA :",
        "aidescription": "Description de l'IA :",
        "aicone": "Ton de l'IA :",
        "aicontext": "Contexte de l'IA :",
        "aivocabulary": "Vocabulaire de l'IA :",
        "aimemory": "Mémoire de l'IA :",
        "savesettings": "Enregistrer les paramètres"
    },
    "es": {
      "title": "Chat interactivo con MichelAI",
      "michelai": "MichelAI",
      "newconversation": "Nueva conversación",
      "savedconversations": "Conversaciones guardadas",
      "settings": "Ajustes",
      "apidoc": "API y Documentación",
      "help": "Ayuda",
      "conversationh": "Charlar con MichelAI",
      "typemessage": "Escribe tu mensaje aquí...",
      "aisettings": "Configuración de IA",
      "ainame": "Nombre de la IA:",
      "aidescription": "Descripción de la IA:",
      "aicone": "Tono de la IA:",
      "aicontext": "Contexto de la IA:",
      "aivocabulary": "Vocabulario de la IA:",
      "aimemory": "Memoria de la IA:",
      "savesettings": "Guardar ajustes"
    }
  };
  
  // Function to update sidebar menu based on language
    // Function to update sidebar menu based on language
    function updateSidebarMenu(language) {
        const menuItems = document.querySelectorAll("#sidebar-menu li");
        for (const item of menuItems) {
          const textKey = item.dataset.text;
          if (textKey) {
            item.textContent = translations[language][textKey];
          }
        }
      }

      function updateTranslations(language) {
        const translatableElements = document.querySelectorAll("[data-text]");
        for (const element of translatableElements) {
          const textKey = element.dataset.text;
          if (textKey) {
            element.textContent = translations[language][textKey];
          }
        }
      }
      
  // Function to get language from local storage
    // Function to get language from local storage
    function getLanguageFromLocalStorage() {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
          return storedLanguage;
        } else {
          // Set a default language if none is stored
          localStorage.setItem("language", "en");
          return "en";
        }
      }
  

    // Get language from local storage
    const selectedLanguage = getLanguageFromLocalStorage();

    // Update sidebar menu with the retrieved language
    updateSidebarMenu(selectedLanguage);

    // Update all translatable elements with the retrieved language
    updateTranslations(selectedLanguage);

  