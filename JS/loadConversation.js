function loadConversation(conversationId) {
    // Find the conversation object by ID
    const conversation = conversations.find((conv) => conv.id === conversationId);
  
    // Clear the chat history
    document.getElementById("chat-history").innerHTML = "";
  
    // Display conversation messages
    if (conversation) {
      conversation.messages.forEach((message) => {
        displayMessage(message.sender, message.content);
      });
    }
  }