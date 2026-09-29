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
<img width="179" height="156" alt="Screenshot 2026-09-29 141623" src="https://github.com/user-attachments/assets/f3c8df9a-d88d-4c42-9f68-34ac9ba4ff29" />
<img width="176" height="169" alt="Screenshot 2026-09-29 141641" src="https://github.com/user-attachments/assets/db372ab3-dbf2-4a01-9dfe-2bf7ae65f845" />
<img width="281" height="242" alt="Screenshot 2026-09-29 142714" src="https://github.com/user-attachments/assets/c2d88c84-c532-49dd-94a3-edcb921117e2" />
<img width="336" height="215" alt="Screenshot 2026-09-29 142735" src="https://github.com/user-attachments/assets/16caa6c9-a929-4438-9633-d394884b4578" />
