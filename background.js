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


  // Get the name from local storage
const getName = async () => {
  // Wrap the chrome.storage.local.get API in a promise
  const promise = new Promise((resolve, reject) => {
    chrome.storage.local.get('name', (result) => {
      resolve(result.name);
    });
  });

  // Await for the promise to resolve and return the name
  const name = await promise;
  return name;
};


  
  // Send a message to the active tab's content script
  chrome.contextMenus.onClicked.addListener(async (info, tab) => {
    // const message = {text: 'Hello from local storage!'};
    //   // await chrome.tabs.sendMessage(tab.id, message);
    // // Save the message to local storage
    // await chrome.storage.local.set({message: message.text}, function() {
    //   if (chrome.runtime.lastError) {
    //     console.error('An error occurred: ' + chrome.runtime.lastError.message);
    //   } else {
    //     console.log('Message is set to local storage');
    //   }
    // });
    // console.log('message sent! From Background');


// Get the stored name using the getName function
    const name = await getName();
    
      // Create a message object with a greeting using the name
    const message2 = { text: `Hello, ${name}!` };
    // Send the message to the active tab's content script
    await chrome.tabs.sendMessage(tab.id, message2);
    

  });



  // Listen for messages from the popup script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   // Check if the message is from the popup script
//   if (sender.url.endsWith('popup.html')) {
//     // Log the message to the console
//     console.log(message.text);
//   }
// });
