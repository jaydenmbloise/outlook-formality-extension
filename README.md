# Formality Template Injector

A lightweight, cross-platform Chrome Extension engineered to streamline professional communication by injecting context-specific email templates directly into webmail clients. 

## Features
* **Cross-Platform Injection:** Dynamically targets and injects templates into both Gmail and Microsoft Outlook Web.
* **Context & Formality Routing:** Generates specific email structures (Inquiry, Meeting, Update) mapped to three tiers of professional formality.
* **Client-Side State Persistence:** Utilizes the `chrome.storage.local` API to remember user preferences across sessions.
* **Smart Cursor Tracking:** Features a custom DOM fallback hierarchy to ensure templates safely inject precisely where the user last focused, bypassing strict enterprise React/Angular security frameworks.

## Installation (Developer Mode)
1. Clone this repository to your local machine.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Toggle **Developer mode** on in the top right corner.
4. Click **Load unpacked** and select the directory containing the extension files.
