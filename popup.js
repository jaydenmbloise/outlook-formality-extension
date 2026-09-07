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
    if (finalContext === "Inquiry" && finalFormality === "Formal") {
        emailTemplate = `Hello [Name],
    
    I am reaching out to inquire about [Topic]. Could you please provide some additional information?

    Thank you for your time,
    [Your Name]`;
    } else if (finalContext === "Meeting" && finalFormality === "Semi-Formal") {
        emailTemplate = `Dear [Name],
    
    Do you have some free time this week to chat about [Topic]? Let me know what day works best for you.
    
    Best,
    [Your Name]`;
    } else if (finalContext === "Update" && finalFormality === "Very-Formal") {
        emailTemplate = `Dear [Name],
    
    Please be advised that the status of [Project] has been updated. No further action is requested from you at this time.
    
    Sincerely,
    [Your Name]`;
    } else if (finalContext === "Inquiry" && finalFormality === "Semi-Formal") {
        emailTemplate = `Hey [Name],
    
    [Your text here...]
    
    Best,
    [Your Name]`;
    } else if (finalContext === "Inquiry" && finalFormality === "Very-Formal") {
        emailTemplate = `To Whom It May Concern,
    
    [Your text here...]
    
    Sincerely,
    [Your Name]`;
    } else if (finalContext === "Meeting" && finalFormality === "Formal") {
        emailTemplate = `Dear [Name],      
    
    [Your text here...]
    
    Thank you,
    [Your Name]`;
    } else if (finalContext === "Meeting" && finalFormality === "Very-Formal") {
        emailTemplate = `Dear [Title and Last Name],
            
    [Your text here...]

    Respectfully,
    [Your Name]`;

    } else if (finalContext === "Update" && finalFormality === "Semi-Formal") {
        emailTemplate = `Hi everyone,
                
    Just wanted to give a quick update on [Topic]...

    Thanks,
    [Your Name]`;

    } else if (finalContext === "Update" && finalFormality === "Formal") {
        emailTemplate = `Hello [Name],
                
    I am writing to provide a status update regarding [Topic]...

    Best regards,
    [Your Name]`;
    }
        console.log(emailTemplate);
});
