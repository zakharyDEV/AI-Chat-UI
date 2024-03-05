function addRandomValue(fieldId) {
    // Define expanded pre-set values for each field
    const presetValues = {
        "ai-name": ["Alice", "Bob", "Eve", "Grace", "Max", "Sophie", "Oliver", "Luna", "Ava", "Leo", "Mila", "Henry", "Zara"],
        "ai-description": ["AI designed to assist with daily tasks", "AI focused on providing educational support", "AI specialized in customer service", "AI for healthcare applications", "AI for creative projects", "AI for financial analysis", "AI for social media management", 
                          "AI for language translation services", "AI for virtual assistant roles", "AI for data analysis tasks", "AI for gaming applications", "AI for marketing strategies"],
        "ai-tone": ["Informative", "Friendly", "Formal", "Casual", "Authoritative", "Humorous", "Professional", 
                    "Warm", "Inspirational", "Persuasive", "Encouraging", "Direct", 
                    "Sincere"],
        "ai-context": ["Business environment","Educational setting","Research field","Healthcare sector","Entertainment industry","Non-profit organizations","Government agencies",
                      "Technology sector","Legal field","Environmental organizations","Retail industry","Hospitality sector",
                      "Sports industry"],
        "ai-vocabulary": ["Technical terms","Common language","Specialized jargon","Scientific terminology","Slang expressions",
                          "Legal terminology","Medical terminology",
                          "Financial terms","Academic vocabulary","Artistic language","Engineering terminology",
                          "Digital marketing terms"]
    };

    // Get the input field associated with the clicked dice emoji
    const inputField = document.getElementById(fieldId);

    // Select a random value from the expanded pre-set list
    const randomIndex = Math.floor(Math.random() * presetValues[fieldId].length);
    const randomValue = presetValues[fieldId][randomIndex];

    // Fill the input field with the random value
    inputField.value = randomValue;
}