// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', (e) => {

    let myWindow = window.top;

    // SET WIDTH AND HEIGHT VARIABLES TO 800 x 700
    let popWidth = 800;
    let popHeight = 700;

    // RESIZE THE POPUP TO THE SET WIDTH AND HEIGHT
    myWindow.window.resizeTo(popWidth, popHeight);

    // MOVE THE POPUP TO THE MIDDLE OF THE SCREEN
    let xPos = (screen.width/2) - (popWidth/2);
    let yPos = (screen.height/2) - (popHeight/2);
    myWindow.window.moveTo(xPos, yPos);

    // CREATE A HELPER FUNCTION TO RETRIEVE THE HTML ELEMENTS FROM THE DOM

    let form = document.querySelector('#empForm');

    // HANDLE THE CANCEL BUTTON. WHEN THE USER CLICKS THIS BUTTON, CLOSE THE WINDOW

    let cancelBtn = document.querySelector('#cancel');
    cancelBtn.addEventListener('click', () => {
        myWindow.window.close();
    });


    // HANDLE THE SUBMISSION OF THE FORM AND THEN IMMEDIATELY PREVENT THE SUBMISSION

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // CREATE 5 VARIABLES FOR ID, NAME, EXT, EMAIL, AND DEPT
        // SET THOSE VARIABLES TO WHATEVER THE USER ENTERS INTO THE FORM ELEMENTS

        let empId = window.document.getElementById('id').value;
        let myName = window.document.getElementById("name").value;
        let extension = window.document.getElementById("extension").value;
        let email = window.document.getElementById("email").value;
        let department = window.document.getElementById("department").value;

        // GET THE LOGINDETAILS OUTPUT ELEMENT FROM THE PARENT PAGE
        myWindow.opener.document.querySelector('#loginDetails');

        // SET THE TEXT OF THE LOGINDETAILS ELEMENT TO THE ABOVE SET VARIABLES

        myWindow.opener.document.getElementsByName('output')[0].value = empId;
        myWindow.opener.document.getElementsByName('output')[1].value = myName;
        myWindow.opener.document.getElementsByName('output')[2].value = extension;
        myWindow.opener.document.getElementsByName('output')[3].value = email;
        myWindow.opener.document.getElementsByName('output')[4].value = department;

        // CLOSE THE POPUP
        myWindow.window.close();

    });

});



// THE DATA SHOULD SHOW ON THE INDEX.HTML PAGE