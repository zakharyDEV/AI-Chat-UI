function getConversationIdFromUI() {
    // Get the currently selected conversation element (e.g., from active class)
    const activeConversation = document.querySelector(".sidebar li.active");
    if (activeConversation) {
      return activeConversation.dataset.conversationId; // Assuming a data-conversation-id attribute
    } else {
      // Handle scenario where no conversation is selected
      console.warn("No conversation selected!");
      return null;
    }
  }