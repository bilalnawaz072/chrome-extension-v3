// Get the button element by its id
const button = document.getElementById('send-message');

// Add a click event listener to the button
button.addEventListener('click', () => {
  // Create a message object
  const message = {text: 'Hello from the popup!'};

  // Send the message to the background script
  chrome.runtime.sendMessage(message);
});
