function displayErrorMessageToUser(message) {
    // Create a visually distinct error message container
    const errorMessageContainer = document.createElement("div");
    errorMessageContainer.className = "error-message"; 
    errorMessageContainer.textContent = message;
  
    // Append the error message to the chat interface, ensuring visibility
    const chatHistory = document.getElementById("chat-history");
    chatHistory.appendChild(errorMessageContainer);
  
    // Scroll to ensure the error message is visible to the user
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }
  