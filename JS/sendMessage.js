/*
function sendMessage() {
    // 1. Capture user input
    const userInput = document.getElementById("user-input").value;
  
    // 2. Display user input in chat history
    const chatHistory = document.getElementById("chat-history");
    const userMessage = document.createElement("p");
    userMessage.className = "user";
    userMessage.textContent = userInput;
    chatHistory.appendChild(userMessage);
  
    // Clear user input field
    document.getElementById("user-input").value = "";
  
    // 3. Handle potential errors gracefully
    try {
      handleUserInput(userInput);
    } catch (error) {
      console.error("Error sending message:", error);
      displayErrorMessageToUser(error.message);
    }
  }
*/
function sendMessage() {
  // 1. Capture user input with null check
  const userInputElement = document.getElementById("user-input");
  const userInput = userInputElement ? userInputElement.value : "";

  // 2. Display user input in chat history (optimized)
  const chatHistoryElement = document.getElementById("chat-history");
  if (chatHistoryElement && userInput) {
    const userMessage = document.createElement("p");
    userMessage.className = "user";
    userMessage.textContent = userInput;
    chatHistoryElement.appendChild(userMessage);

    // Clear user input field while preserving selection (performance)
    userInputElement.selectionStart = 0;
    userInputElement.selectionEnd = 0; // Or use alternative method if applicable
  }

  // 3. Handle potential errors gracefully
  try {
    handleUserInput(userInput);
  } catch (error) {
    console.error("Error sending message:", error);

    // Provide informative error message to the user (scalability)
    const errorMessage = error.message || "An error occurred while sending your message.";
    displayErrorMessageToUser(errorMessage);
  }
}
