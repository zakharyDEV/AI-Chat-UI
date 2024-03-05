function getLanguage(text) {
    // Ensure text is actually a string
    if (typeof text !== "string") {
      console.error("Invalid input to getLanguage: not a string");
      return ""; // Or a default class if desired
    }
  
    // Use more robust language detection (consider dedicated libraries)
    if (
      text.includes("#include") ||
      text.includes("def") ||
      text.match(/<\/?[a-z][\s\S]*>/i)
    ) {
      return "code";
    } else {
      return "text";
    }
  }