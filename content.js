const BOX_SELECTOR = '[aria-label="Message Body"], [aria-label="Message body"]';
 
// Track the last compose box the user actually focused, as an event --
// not inferred from DOM order or document.activeElement, both of which
// get reset/misleading once the user clicks away to open the popup.
let lastFocusedBox = null;
document.addEventListener('focusin', function (e) {
    if (e.target.matches && e.target.matches(BOX_SELECTOR)) {
        lastFocusedBox = e.target;
    }
});
 
// Track compose boxes in the order they actually appear, so we know
// which one opened most recently even if the user never clicked into
// one. DOM position alone isn't reliable for this -- Gmail doesn't
// always append new compose windows at the end of the page.
let openOrder = [];
const composeObserver = new MutationObserver(function () {
    document.querySelectorAll(BOX_SELECTOR).forEach(function (box) {
        if (!openOrder.includes(box)) openOrder.push(box);
    });
    openOrder = openOrder.filter(function (box) { return document.contains(box); });
});
composeObserver.observe(document.body, { childList: true, subtree: true });
 
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "insertTemplate") {
        const emailBox = findTargetComposeBox();
 
        if (emailBox) {
            placeCursorAtEnd(emailBox);
            document.execCommand('insertText', false, request.text);
            console.log("Template inserted into the email body.");
        } else {
            console.error("Could not find an open compose window's message body.");
        }
    }
});
 
function findTargetComposeBox() {
    const boxes = document.querySelectorAll(BOX_SELECTOR);
    if (boxes.length === 0) return null;
 
    // 1. The box we explicitly tracked as last-focused, if it's still open.
    if (lastFocusedBox && document.contains(lastFocusedBox) && Array.from(boxes).includes(lastFocusedBox)) {
        return lastFocusedBox;
    }
    // 2. Currently focused element, in case it's already a box.
    if (document.activeElement && Array.from(boxes).includes(document.activeElement)) {
        return document.activeElement;
    }
    // 3. Most recently opened box, tracked by observation order --
    // covers the case where a second box was opened but never clicked in.
    if (openOrder.length > 0) {
        return openOrder[openOrder.length - 1];
    }
    // 4. Absolute last resort.
    return boxes[boxes.length - 1];
}
 
// Focusing a contenteditable element does NOT create a text cursor by
// itself -- execCommand needs an actual Selection Range to know where
// to insert. This creates one, collapsed to the end of the existing
// content, so insertion works whether or not the user has clicked in.
function placeCursorAtEnd(el) {
    el.focus();
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
