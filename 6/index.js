function initialiseGameVariables(){

    arrComputerSequence = [];                                                                       // Array for computer generated sequence
    arrMySequence = [];                                                                             // Array for my sequence input

    gameRunning = false;                                                                            // Is there a game running in this moment?
    colorFieldClickable = true;                                                                     // Can I click on fields?

    score = 0;                                                                                      // Start score 0
    highscore = localStorage.getItem('senso-game-highscore');                                       // Try to get the saved highscore
    highscore = highscore == null ? 0 : highscore;                                                  // First time programming is running, set highscore to zero. Else set it to the saved value

    gameSpeed = [["Langsam", 500], ["Schnell", 300], ["Sehr schnell", 200]];                        // Decreasing options on how many milliseconds between the blink, and the name of the option
    numToLightFields = [1, 2, 3, 4, 5];                                                             // Can only be changed in editor.html --> default [0] = 1
    tone = true;                                                                                    // May the computer make some noise?
    
    yellowField = "#yellowField";                                                                   // Define all fields by assigning their ids to variables (main game)
    redField = "#redField";
    greenField = "#greenField";
    blueField = "#blueField";

    allFields = [                                                                                   // Collect all fields in an array, together with their default color, and the frequency of the tone they make
                    [yellowField, "#ffb90f", 262],                                                  // Must be in same order as field divs!
                    [redField, "red", 294],                                                         // May be overloaded by editorSpecificFunctions
                    [greenField, "green", 392], 
                    [blueField, "blue", 330]
                ];

    urlSplitUp = (window.location.href).split("/");                                                 // Get current url as array
    currPage = urlSplitUp[urlSplitUp.length - 1];                                                   // Get current page as string
}

/*------------------------------------------------------------------------------------------------*/

async function clickOnField(clickedField){
    console.log("clickOnField called with: " + clickedField)                    // Log the clicked field ids
    clickedFieldNumber = parseInt($(clickedField).attr("aria-label"));                              // The aria-label of a field is its identifier. Field divs must be in same order as allFields

    if(gameRunning){                                                                                // If there is a game running do game stuff. Otherwise only pull the effects on the field. See below
        arrMySequence.push(clickedFieldNumber);                                                     // Push the clicked fieldNumber in my sequence array
        compareArrays(arrComputerSequence, arrMySequence);                                          // Compare my input sequence til now, with the computer sequence
    }

    var fieldObject = allFields[clickedFieldNumber];                                                // Clicked field get object 
    effectsOnField([fieldObject], "white");                                                         // Do the effect stuff on this field, with the color white (paint it white, and make a tone)
    await delay(250);                                                                               // Wait for 250ms                                                                     
    effectsOnField(allFields, "allColors");                                                         // Reset all fields. Async could mess stuff up, and a field may end white
}

/*------------------------------------------------------------------------------------------------*/

function effectsOnField(arrFields, color){
    console.log("effectsOnField called with color: " + color);                                      // Log the color of the effect
    len = arrFields.length;                                                                         // How many fields will be "effected"
    for(var i=0; i<len; i++){                                                                       // Loop through all fields

        var fieldObject = arrFields[i];                                                             // Get current fieldObject
        var fieldDiv = fieldObject[0];                                                              // The actual field
        var fieldColor = color == "allColors" ? fieldObject[1] : color;                             // Field color. If "allColors" is passed, so are allFields --> Get depending color for the current field

        if(tone && len == 1){                                                                       // If tone is allowed and len == 1 (only one field, and not all or more)
            var fieldFrequency = fieldObject[2];                                                    // Get depending field frequency
            makeATone(fieldFrequency);                                                              // Make a tone
        }

        if(currPage != "editor.html"){
            $(fieldDiv).css("background", fieldColor);                                              // Change background color of current field in main game
        }
        else{
            $(fieldDiv).css("border", "var(--s) solid " + fieldColor);                              // Change border color of current field in editor game
        }
    }
}

/*------------------------------------------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
    initialiseGameVariables();
});

document.addEventListener("DOMContentLoaded", () => {
    const colorFields = document.querySelectorAll('.colorField');
    console.log("colorFields: ", colorFields); // Log the color fields for debugging
    colorFields.forEach(field => {
        // Ursprüngliche Farbe speichern
        console.log("Original color for field: ", field.id, field.style.backgroundColor);
        const originalColor = field.style.backgroundColor;

        field.addEventListener('mousedown', () => {
            // Ursprüngliche Farbe merken, falls gesetzt
            console.log("Mouse down on field: ", field.id);
            field.dataset.originalColor = field.style.backgroundColor;
            field.style.backgroundColor = 'white';
        });

        field.addEventListener('mouseup', () => {
            // Ursprüngliche Farbe zurücksetzen
            field.style.backgroundColor = field.dataset.originalColor || '';
        });

        // Für Touch-Geräte
        field.addEventListener('touchstart', (e) => {
            e.preventDefault();
            field.dataset.originalColor = field.style.backgroundColor;
            field.style.backgroundColor = 'white';
        });

        field.addEventListener('touchend', (e) => {
            e.preventDefault();
            field.style.backgroundColor = field.dataset.originalColor || '';
        });
    });
});
 