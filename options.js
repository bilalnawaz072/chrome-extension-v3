// Saves the name to local storage
const saveName = () => {
    // Get the input element by its id
    const input = document.getElementById('name');
  
    // Get the value of the input field
    const name = input.value;
  
    // Check if the name is not empty
    if (name) {
      // Save the name to local storage
      chrome.storage.local.set({name}, () => {
        // Update status to let user know name was saved
        const status = document.getElementById('status');
        status.textContent = 'Name saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      });
    }
  };
  
  // Restores the name from local storage
  const restoreName = () => {
    // Get the name from local storage
    chrome.storage.local.get('name', (result) => {
      // Check if the name exists
      if (result.name) {
        // Set the value of the input field to the name
        document.getElementById('name').value = result.name;
      }
    });
  };
  
  // Add event listeners to the document and the button
  document.addEventListener('DOMContentLoaded', restoreName);
  document.getElementById('save').addEventListener('click', saveName);
  