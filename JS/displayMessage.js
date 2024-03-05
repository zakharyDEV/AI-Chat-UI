function displayMessage(sender, message) {
    const chatHistory = document.getElementById("chat-history");
    const messageContainer = document.createElement("p");
    messageContainer.className = sender;
    messageContainer.appendChild(message);
    chatHistory.appendChild(messageContainer);
  }
  