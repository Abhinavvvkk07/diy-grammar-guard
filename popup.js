document.addEventListener('DOMContentLoaded', () => {
    const apiKeyInput = document.getElementById('apiKey');
    const saveButton = document.getElementById('saveButton');
    const statusDiv = document.getElementById('status');
    const userContextInput = document.getElementById('userContext');
    const saveContextButton = document.getElementById('saveContextButton');

    // Load the saved API key and context when the popup opens
    // This retrieves the key and context from Chrome's synchronized storage.
    chrome.storage.sync.get(['apiKey', 'userContext'], (result) => {
        if (result.apiKey) {
            apiKeyInput.value = result.apiKey;
        }
        if (result.userContext) {
            userContextInput.value = result.userContext;
        }
    });

    // Save the API key when the button is clicked
    saveButton.addEventListener('click', () => {
        const apiKey = apiKeyInput.value;
        // Set the apiKey in storage.
        chrome.storage.sync.set({ apiKey: apiKey }, () => {
            statusDiv.textContent = 'API Key saved!';
            // Clear the status message after 2 seconds.
            setTimeout(() => {
                statusDiv.textContent = '';
            }, 2000);
        });
    });

    // Save the context when the button is clicked
    saveContextButton.addEventListener('click', () => {
        const userContext = userContextInput.value;
        chrome.storage.sync.set({ userContext: userContext }, () => {
            statusDiv.textContent = 'Context saved!';
            setTimeout(() => {
                statusDiv.textContent = '';
            }, 2000);
        });
    });
});
