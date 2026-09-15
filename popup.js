// variables for getting email context and formality dropdowns to become reactive
const contextDropdown = document.getElementById("emailcontext");
const formalityDropdown = document.getElementById("emailformality");
const formalitySection = document.getElementById("emailformalitySection");
const buttonSection = document.getElementById("buttonSection");
// Hiding the context dropdown
    contextDropdown.addEventListener("change", function() {
        const selectedContext = contextDropdown.value;
        if (selectedContext !== "None") {
            formalitySection.style.display = "block"; 
        } else {
            formalitySection.style.display = "none";
            buttonSection.style.display = "none"; 
            formalityDropdown.value = "None";
        }
    });
// Hiding the formality dropdown until a option is selected
    formalityDropdown.addEventListener("change", function() {
        const selectedFormality = formalityDropdown.value;
        if (selectedFormality !== "None") {
            buttonSection.style.display = "block";
        } else {
            buttonSection.style.display = "none";
        }
    });
    
const formatBtn = document.getElementById("formatEmailBtn");
formatBtn.addEventListener ("click", function() {
    const finalContext = contextDropdown.value;
    const finalFormality = formalityDropdown.value;
    console.log("Success! Here is what the user chose:");
    console.log("Context:", finalContext);
    console.log("Formality:", finalFormality);

    let emailTemplate = "";
    // --- INQUIRY TEMPLATES ---
    if (finalContext === "Inquiry" && finalFormality === "Semi-Formal") {
        emailTemplate = `Hey [Name],
    
I'm working on [Briefly describe your current task, e.g., the new UI layout] and ran into a quick question about [Specific detail you need, e.g., the color palette]. 

Could you let me know [Exactly what you need them to answer]?
    
Best,
[Your Name]`;

    } else if (finalContext === "Inquiry" && finalFormality === "Formal") {
        emailTemplate = `Hello [Name],
    
I am reaching out to inquire about [Specific subject, e.g., the upcoming project deadline or course syllabus]. 

Could you please provide some additional information regarding [Specific detail you are confused about, e.g., the required formatting guidelines]?

Thank you for your time,
[Your Name]`;

    } else if (finalContext === "Inquiry" && finalFormality === "Very-Formal") {
        emailTemplate = `To Whom It May Concern,
    
I am writing to formally request information regarding [Official topic, e.g., the new compliance policies or department guidelines]. 

Please advise on [Specific required action, e.g., the proper documentation needed to proceed].
    
Sincerely,
[Your Name]`;

    // --- MEETING TEMPLATES ---
    } else if (finalContext === "Meeting" && finalFormality === "Semi-Formal") {
        emailTemplate = `Hi [Name],
    
Do you have some free time this week to chat about [Topic, e.g., our strategy for next week's presentation]? 

Let me know what day works best for you, or feel free to throw some time on my calendar.
    
Best,
[Your Name]`;

    } else if (finalContext === "Meeting" && finalFormality === "Formal") {
        emailTemplate = `Dear [Name],      
    
I would like to schedule a brief meeting to discuss [Important topic, e.g., my performance review or our Q3 roadmap]. 

Please let me know your availability over the next couple of weeks, or if you have a preferred time to connect.
    
Thank you,
[Your Name]`;

    } else if (finalContext === "Meeting" && finalFormality === "Very-Formal") {
        emailTemplate = `Dear [Title and Last Name],
            
I am respectfully requesting a meeting to review [High-level topic, e.g., the finalized budget proposal or department restructuring]. 

Please let me know when you might have availability in your schedule to discuss this matter.

Respectfully,
[Your Name]`;

    // --- UPDATE TEMPLATES ---
    } else if (finalContext === "Update" && finalFormality === "Semi-Formal") {
        emailTemplate = `Hi everyone,
                
Just wanted to give a quick update on [What you are working on, e.g., the frontend bug fixes]. 

We have successfully [Mention 1-2 completed tasks], and are currently [Mention any roadblocks, or say "moving smoothly toward completion"].

Thanks,
[Your Name]`;

    } else if (finalContext === "Update" && finalFormality === "Formal") {
        emailTemplate = `Hello [Name],
                
I am writing to provide a status update regarding [Project or Task Name]. 

As of today, we have completed [Key milestone], and our next step is to [Next action item]. I will keep you informed as we progress.

Best regards,
[Your Name]`;

    } else if (finalContext === "Update" && finalFormality === "Very-Formal") {
        emailTemplate = `Dear [Name],
    
Please be advised that the status of [Official Project/Initiative] has been updated. We have successfully executed [Major milestone or administrative action]. 

No further action is requested from you at this time.
    
Sincerely,
[Your Name]`;
    }
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        let activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, {
            action: "insertTemplate",
            text: emailTemplate
        });
        console.log("Payload sent to tab:", activeTab.id);
    });
});