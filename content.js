// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message.text); // Log the message to the console
  });
  