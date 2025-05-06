function goToSection(section) {
  // Hide the main menu
  document.getElementById('mainMenu').style.display = 'none';
  
  // First hide all sections
  document.getElementById('androidSection').style.display = 'none';
  document.getElementById('iosSection').style.display = 'none';
  document.getElementById('infoSection').style.display = 'none';
  document.getElementById('chatbotSection').style.display = 'none';
  
  // Show only the selected section
  if (section === 'android') {
    document.getElementById('androidSection').style.display = 'block';
  } else if (section === 'info') {
    document.getElementById('infoSection').style.display = 'block';
  } else if (section === 'ios') {
    document.getElementById('iosSection').style.display = 'block';
  } else if (section === 'CHATBOT') {
    document.getElementById('chatbotSection').style.display = 'block';
  }
}

function goHome() {
  // Show the main menu
  document.getElementById('mainMenu').style.display = 'flex';
  
  // Hide all sections
  document.getElementById('androidSection').style.display = 'none';
  document.getElementById('iosSection').style.display = 'none';
  document.getElementById('infoSection').style.display = 'none';
  document.getElementById('chatbotSection').style.display = 'none';
}

// Chatbot functionality
function sendMessage() {
  const userInput = document.getElementById('userInput').value;
  if (userInput.trim() === '') return;
  
  // Display user message
  addMessage('user', userInput);
  
  // Clear input field
  document.getElementById('userInput').value = '';
  
  // Show typing indicator
  document.getElementById('typing-indicator').style.display = 'block';
  
  // Simulate API response (replace with actual API call)
  setTimeout(() => {
    // Hide typing indicator
    document.getElementById('typing-indicator').style.display = 'none';
    
    // Process the message and get a response
    const botResponse = getBotResponse(userInput);
    addMessage('bot', botResponse);
  }, 1000);
}

function addMessage(sender, text) {
  const chatMessages = document.getElementById('chat-messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  
  // Auto scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Allow sending messages with Enter key
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
}

// Simple response generator (replace with actual API)
function getBotResponse(input) {
  input = input.toLowerCase();
  
  if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
    return "Hello! How can I help you find the perfect phone today?";
  } 
  else if (input.includes('best android') || input.includes('recommend android')) {
    return "Based on current ratings, the Samsung Galaxy S23 Ultra and Google Pixel 8 Pro are among the best Android phones available. Would you like to know more about their features?";
  }
  else if (input.includes('best iphone') || input.includes('recommend iphone') || input.includes('best ios')) {
    return "The iPhone 15 Pro Max is currently Apple's flagship device with excellent performance and camera quality. The iPhone 15 offers similar features at a more affordable price point.";
  }
  else if (input.includes('budget') || input.includes('cheap') || input.includes('affordable')) {
    return "For budget-friendly options, consider the Google Pixel 7a, Samsung Galaxy A54 5G, or the iPhone SE (2022). They offer great value while maintaining good performance.";
  }
  else if (input.includes('camera') || input.includes('photography')) {
    return "For the best camera experience, the Samsung Galaxy S23 Ultra (200MP), Google Pixel 8 Pro, and iPhone 15 Pro series are top choices with exceptional photo and video capabilities.";
  }
  else if (input.includes('battery') || input.includes('long lasting')) {
    return "Phones with excellent battery life include the Samsung Galaxy M54 5G (6000mAh), Asus ROG Phone 7 (6000mAh), and most phones with 5000mAh batteries like the Galaxy S23 Ultra.";
  }
  else if (input.includes('gaming') || input.includes('performance')) {
    return "For gaming and high performance, consider the Asus ROG Phone 7, iPhone 15 Pro series with A17 Pro chip, or Android phones with Snapdragon 8 Gen 2 processors.";
  }
  else if (input.includes('thank')) {
    return "You're welcome! Feel free to ask if you have any other questions about phones.";
  }
  else {
    return "I'm your phone recommendation assistant. You can ask me about the best phones, specific features like cameras or battery life, or budget options. How can I help you today?";
  }
}
