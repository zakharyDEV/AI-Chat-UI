function createNewConversation() {
    // Generate a unique ID
    const newId = Math.random().toString(36).substring(2, 15);
  
    // Create a new conversation object
    const newConversation = {
      id: newId,
      messages: [],
    };
  
    // Add the new conversation to the array
    conversations.push(newConversation);
  
    // Save conversations to local storage
    localStorage.setItem("conversations", JSON.stringify(conversations));
  
    // Update UI to display the new conversation ID in the list
    const conversationList = document.querySelector(".sidebar ul");
    const newListItem = document.createElement("li");
    newListItem.textContent = `Conversation #${newId}`;
    newListItem.addEventListener("click", () => loadConversation(newId));
    conversationList.appendChild(newListItem);
  }
  
  const newConversationItem = document.querySelector(".sidebar li:first-child");
  newConversationItem.addEventListener("click", createNewConversation);
  