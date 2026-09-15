chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.action === "insertTemplate") {
        const emailBox = document.querySelector('[aria-label="Message Body"], [aria-label="Message body"]');
        if(emailBox) {
            emailBox.focus();
            document.execCommand('insertText', false, request.text);
            console.log("SUCCESS: Payload injected into the email body!");
        } else {
            console.error("FAILED: Could not find the email box. Is the Compose window open?");
        }
    }
});