
function createCodeBlockIfNeeded(text) {
    if (getLanguage(text) === "code") {
      const codeBlock = document.createElement("pre");
      codeBlock.className = "code-block"; // Apply the code block styling
      codeBlock.textContent = text;
      return codeBlock; // Return the formatted code block
    } else {
      return text; // Return the text as is for non-code content
    }
  }