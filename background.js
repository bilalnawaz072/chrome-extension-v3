// Create a context menu item
chrome.contextMenus.create({
    id: 'hello',
    title: 'Say hello',
    contexts: ['all'],
  });
  
  // Register a content script that runs in the active tab
  chrome.action.onClicked.addListener(async (tab) => {
    await chrome.scripting.registerContentScripts([
      {
        matches: [tab.url],
        js: [{file: 'content.js'}],
        runAt: 'document_end',
        allFrames: true,
        persistAcrossSessions: false,
      },
    ]);
  });
  
  // Send a message to the active tab's content script
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    const message = {text: 'Hello from local storage!'};
      // await chrome.tabs.sendMessage(tab.id, message);
    // Save the message to local storage
    await chrome.storage.local.set({message: message.text}, function() {
      if (chrome.runtime.lastError) {
        console.error('An error occurred: ' + chrome.runtime.lastError.message);
      } else {
        console.log('Message is set to local storage');
      }
    });
      console.log('message sent! From Background');
  });



  // Listen for messages from the popup script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Check if the message is from the popup script
  if (sender.url.endsWith('popup.html')) {
    // Log the message to the console
    console.log(message.text);
  }
});
