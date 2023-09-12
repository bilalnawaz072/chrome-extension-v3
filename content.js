// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Log the message to the console
  console.log(message.text); 

  });
  
  chrome.storage.local.get(['message'], function (result) {
    if (chrome.runtime.lastError) {
      console.error('An error occurred: ' + chrome.runtime.lastError.message);
    } else {
      console.log('Message is get  to local storage');
      console.log('Message from local storage: ' + result.message);
    }
  });