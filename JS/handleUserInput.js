async function handleUserInput(userInput) {
    try {
      const response = await fetch('https://zbrassard954-f9dfd023-9271-4d41-8bb6-a7c490cf4491.socketxp.com/michel/prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userInput }),
      });
  
      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }
  
      const data = await response.json();
  
      if (!data.response) {
        throw new Error("Missing AI response in server response data.");
      }
  
      // Inside handleUserInput function
      const aiText = data.response;
      console.log("AI Response:", aiText);
  
      const conversationId = getConversationIdFromUI(); // Get ID from UI
  
      // Display the AI response (use the logic below in your display function)
      const chatHistory = document.getElementById("chat-history");
      const aiMessage = document.createElement("p");
      aiMessage.className = "ai";
  
      const languageClass = getLanguage(aiText);
  
      if (languageClass === "code") {
        // **Removed code highlighting functionality**
        const preElement = document.createElement("pre");
        preElement.className = languageClass;
        preElement.textContent = aiText;
        aiMessage.appendChild(preElement);
      } else {
        aiMessage.textContent = aiText;
      }
  
      const codeBlock = createCodeBlockIfNeeded(aiText);
      if (codeBlock) {
        const codeLines = aiText.match(/^`(.+?)`$/gms);
        let extractedText = "";
        if (codeLines) {
          extractedText = codeLines.map(line => line.slice(4, -4)).join('\n');
        } else {
          extractedText = aiText; // Optional: Use a different styling for plain text
        }
        codeBlock.textContent = extractedText;
  
        aiMessage.appendChild(codeBlock);
      } else {
        aiMessage.textContent = aiText;
      }
  
      chatHistory.appendChild(aiMessage);
  
      // Save the message to the conversation
      if (conversationId) {
        const newMessage = {
          sender: "user",
          content: userInput,
        };
        const conversation = conversations.find(conv => conv.id === conversationId);
        if (conversation) {
          conversation.messages.push(newMessage);
  
          // Save conversations to local storage
          localStorage.setItem("conversations", JSON.stringify(conversations));
        } else {
          console.warn("Conversation not found for saving message:", conversationId);
        }
      } else {
        console.warn("No conversation selected, message not saved.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      displayErrorMessageToUser(
        error.message.includes("Network")
          ? "Network error. Please check your connection and try again."
          : "Server error. Please try again later."
      );
    }
  }