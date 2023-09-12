// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Log the message to the console
  console.log(message.text); 

  });
  
  chrome.storage.local.get(['message'], function (result) {
    console.log('Message is get  to local storage');
    // Hello from the background script!
    console.log('Message from local storage: ' + result.message);
  });