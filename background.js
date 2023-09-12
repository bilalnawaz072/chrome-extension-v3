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
    const message = {text: 'Hello from the background script!'};
      await chrome.tabs.sendMessage(tab.id, message);
      console.log('message sent! From Background');
  });
  













