// HANDLE THE LOAD EVENT OF THE WINDOW

window.addEventListener('load', (e) => {

    let addButton = document.querySelector('#btnAddEmployee');

    // HANDLE THE CLICK EVENT FOR THE BTNADDEMPLOYEE BUTTON
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        openWin();
        //console.log("button was clicked")
    });

    // OPEN THE ADD-EMPLOYEE.HTML PAGE WITHIN A POPUP
    function openWin() {
    myWindow = window.open("../add-employee.html", "Add Employee", "width=100,height=100");
    }
});


