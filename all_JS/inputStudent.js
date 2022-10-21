//          Declare global value to indicate if each input is typed correctly
var globalValid = 0;

//          Declare global value to be used to create a table later on
var globalDep


//          Declare 5 global values to indicate if it is needed to check if input value is empty
var emptyCheck1 = 0;
var emptyCheck2 = 0;
var emptyCheck3 = 0;
var emptyCheck4 = 0;
var emptyCheck5 = 0;

//            TRANSFER THIS TO CLASS FILE

//           Dictionary for the departments, for now there will be only 3 Departments to check input

const Departments = [
    'Information Technology',
    'Electrical Engineering',
    'Electronic - Communications',
];


//          Call all validation function
function callAll(id, vastEmptyCheck) {
    
    //          vastEmptyCheck to check empty inputs from Validation
    if (vastEmptyCheck) {
        emptyCheck1 = 1;
        emptyCheck2 = 1;
        emptyCheck3 = 1;
        emptyCheck4 = 1;
        emptyCheck5 = 1;
    }

    //alert("Call all initiated");
    if (id != 1 && id != 2) checkInputClass(0, emptyCheck1);
    if (id != 2) checkInputDep(0, emptyCheck2);
    if (id != 3) checkInputGen(0, emptyCheck3);
    if (id != 4) checkInputStuID(0, emptyCheck4);
    if (id != 5) checkInputName(0, emptyCheck5);   

}

//          Validation function for each input, this one is for Name input
function checkInputName(callAllAllow, emptyCheck) {
    //          indicate it is needed to check if the input is empty through function callAll
    emptyCheck5 = emptyCheck;

    //          get input
    var input = document.querySelector(".forInsert td:nth-child(1) input").value;
    // alert(input + " Name");

    var temp = 1;

    //          check if the input string contains only alphabetical characters and space by checking if their lowercase equivilant is equal or not equal to their uppercase equivilant
    for(var i = 0; i < input.length; i++){
        if (input[i].toLowerCase() === input[i].toUpperCase() && input[i] != " ") {
            
            temp = 0;
            //alert(temp);

        }
    }

    //alert(temp);
    if (temp && input.length != 0) {
        globalValid++;

        var Warning = document.querySelector(".warning");

        //          set to none;
        document.querySelector(".forInsert td:nth-child(1)").style.background = "";

        //          avoid erasing neccesary warnings
        if (callAllAllow) Warning.innerHTML = "";
        //alert(callAllAllow);

        if (callAllAllow) callAll(5, 0);
    }
    else if (!temp && input.length != 0) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        //          set to red
        document.querySelector(".forInsert td:nth-child(1)").style.background = "red";

        Warning.innerHTML = "Name only consists of alphabetical characters!"
        //alert("Failure");
    }
    //          emptyCheck here to avoid unnecessary alert for untouched boxes
    else if (input.length == 0 && emptyCheck) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(1)").style.background = "red";

        Warning.innerHTML = "Name is empty!";
        //alert("Empty");
    }
}

function checkInputStuID(callAllAllow, emptyCheck) {
    emptyCheck4 = emptyCheck;

    var input = document.querySelector(".forInsert td:nth-child(2) input").value;
    // alert(input + " StuID");
    

    //          simply checking the input by testing if the input string only have digits or not
    
    //          the slashes (/ /) mark the beginning and end of the regular expression
    //          the caret (^) marks the beginning of the input
    //          the dollar sign ($) marks the end
    //          the square brackets ([]) mark char class or char range
    //          the plus (+) matches the preceding item 1 or more times
    var temp = 1;
    if (/^[0-9]+$/.test(input) == false && input.length != 0) {
        
        temp = 0;
        //alert(temp);

    }

    //alert(temp);
    if (temp && input.length != 0) {
        globalValid++;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(2)").style.background = "";

        if (callAllAllow) Warning.innerHTML = "";
        //alert("Success");

        if (callAllAllow) callAll(4, 0);
    }
    else if (!temp && input.length != 0) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(2)").style.background = "red";

        Warning.innerHTML = "Student ID only consists of number characters!"
        //alert("Failure");
    }
    else if (input.length == 0 && emptyCheck) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(2)").style.background = "red";

        Warning.innerHTML = "Student ID is empty!";
        //alert("Empty");
    }
}

function checkInputGen(callAllAllow, emptyCheck) {
    emptyCheck3 = emptyCheck;

    var input = document.querySelector(".forInsert td:nth-child(3) input").value;
    // alert(input + " Gen");
    
    var temp = 1;
    if (/^[0-9]+$/.test(input) == false && input.length != 0) {
        
        temp = 0;
        //alert(temp);

    }

    //alert(temp);
    if (temp && input.length < 3 && input.length != 0) {
        globalValid++;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(3)").style.background = "";

        if (callAllAllow) Warning.innerHTML = "";
        //alert("Success");

        if (callAllAllow) callAll(3, 0);
    }
    else if (temp && input.length >= 3) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(3)").style.background = "red";

        Warning.innerHTML = "Do we do time travelling now? :>"
        //alert("Question");
    }
    else if (!temp && input.length != 0) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(3)").style.background = "red";

        Warning.innerHTML = "Generation only consists of number characters!"
        //alert("Failure");
    }
    else if (input.length == 0 && emptyCheck) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(3)").style.background = "red";

        Warning.innerHTML = "Generation is empty!";
        //alert("Empty");
    }
}

function checkInputDep(callAllAllow, emptyCheck) {
    emptyCheck2 = emptyCheck;

    var input = document.querySelector(".forInsert td:nth-child(4) input").value;
    // alert(input + " StuID");

    
    globalDep = 0;
    var temp = 0;

    //          check if input is == to i or not by comparing string length and indexOf
    //          dem here will be used for later
    for(var i = 0; i < input.length; i++){
        if (input[i].toLowerCase() === input[i].toUpperCase() && input[i] != " ") {
            
            temp = -1;
            //alert(temp);

        }
    }

    Departments.forEach((i) => {

        if (i.indexOf(input) == 0 && input.length == i.length) temp = ++globalDep;

        //alert(i.indexOf(input) + " " + input.length + " " + i.length);

    });

    
    // alert(globalDep + " " + temp);
    if (temp == 1 && input.length != 0) {
        globalValid++;
        globalDep = temp;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(4)").style.background = "";

        if (callAllAllow) Warning.innerHTML = "";
        //alert("Success");

        if (callAllAllow) callAll(2, 0);
    }
    else if (input.length == 0 && emptyCheck) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(4)").style.background = "red";

        Warning.innerHTML = "Department is empty!";
        //alert("Empty");
    }
    else if (temp == -1) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(4)").style.background = "red";

        Warning.innerHTML = "Department only consists of alphabetical characters!";
        //alert("Wrong Char");
    }    
    else if (!temp && input.length != 0) {
        globalValid++;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(4)").style.background = "yellow";

        Warning.innerHTML = "No department found! Continuing will result in adding a new department!"
        //alert("Failure");
    }

    //          Cause no harm if not used, will be useful when the time is right
}

function checkInputClass(callAllAllow, emptyCheck) {
    emptyCheck1 = emptyCheck;

    var input = document.querySelector(".forInsert td:nth-child(5) input").value;
    // alert(input + " StuID");

    var temp = 0;


    if (input.length == document.querySelector(".forInsert td:nth-child(4) input").value.length + 2     //check length
        && /^[0-9]+$/.test(input[input.length - 1]) == true                                             //check last char
        && input[input.length - 2] == " ") temp = 1;                                                    //check 2nd last char
    
    // console.log(input.length, document.querySelector(".forInsert td:nth-child(4) input").value.length + 2)

    if (temp && input.length != 0) {
        globalValid++;
        globalDep = temp;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(5)").style.background = "";

        if (callAllAllow) Warning.innerHTML = "";
        //alert("Success");

        if (callAllAllow) callAll(1, 0);
    }
    else if (input.length == 0 && emptyCheck) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(5)").style.background = "red";

        Warning.innerHTML = "Class is empty!";
        //alert("Empty");
    }
    else if (!temp && input.length != 0) {
        globalValid = 0;

        var Warning = document.querySelector(".warning");

        document.querySelector(".forInsert td:nth-child(5)").style.background = "red";

        Warning.innerHTML = "Class contains only the Department and their number!"
        //alert("Failure");
    }
    

}






//          Class section updates as Department section updates
function updateClass() {
    //Update class
    var give = document.querySelector(".forInsert td:nth-child(4) input");
    var take = document.querySelector(".forInsert td:nth-child(5) input");

    take.value = give.value;
}


//          What comes after pressing the Reset button
function Reset() {
    const button = document.querySelector(".reset");

    button.addEventListener('click', () => {

        Swal.fire({

            title: 'Are you sure?',
            text: 'This will reset what you have typed',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Nou',
            confirmButtonColor: 'rgb(210, 30, 30)',

        }).then((result) => {
            if (result.isConfirmed) {

                afterReset();

            }
        })
        
        

    })
}


//          After Reset
function afterReset() {

    //          Make reset disappear, check appear, alongside with their warning sections
    x = document.querySelector(".check");
    x.style.display = "block";
    
    var x = document.querySelector(".reset");
    x.style.display = "none";
    
    x = document.querySelector(".warning.student");
    x.style.display = "block";

    x = document.querySelector(".tip.course");
    x.style.display = "none";

    //          Get all value
    testing = document.querySelectorAll(".forInsert td");
    var i = 1;

    //          Recreating the input section for the student
    testing.forEach((row) => {
        //alert(row.value);
        var tempt = document.querySelector(".forInsert td:nth-child("+i+")");
        var testtt = row.innerHTML;
        row.innerHTML = "";


        //          The appendChild() method appends a node (element) as the last child of an element.
        tempt.appendChild(document.createElement('input'));
        tempt = document.querySelector(".forInsert td:nth-child("+i+") input");

        tempt.setAttribute("type", "text");

        //          Asign testtt inner HTML to the value of tempt
        tempt.value = testtt;

        //          Asign attribute similarly to before check
        if (i == 1) {
            tempt.setAttribute("oninput", "checkInputDep(1, 1)");
            tempt.setAttribute("onblur", "checkInputName(1, 0)");
        }
        if (i == 2) {
            tempt.setAttribute("oninput", "checkInputDep(1, 1)");
            tempt.setAttribute("onblur", "checkInputStuID(1, 0)");
        }
        if (i == 3) {
            tempt.setAttribute("oninput", "checkInputDep(1, 1)");
            tempt.setAttribute("onblur", "checkInputGen(1, 0");
        }
        if (i == 4) {
            tempt.setAttribute("oninput", "checkInputDep(1, 1), updateClass()");
            tempt.setAttribute("onblur", "checkInputDep(1, 0)");
        }
        if (i == 5) {
            tempt.setAttribute("oninput", "checkInputDep(1, 1)");
            tempt.setAttribute("onblur", "checkInputClass(1, 0)");
        }

        i++;
    });

    //          Hide table
    x = document.querySelectorAll(".appearLater");

    x.forEach((element) => {

        element.style.display = "none";
        element.style.overflow = "hidden";

    })

    //          Delete Course table
    x = document.querySelectorAll(".inputForCourse tbody tr:nth-child(n + 2)");

    x.forEach((tr) => {
        tr.innerHTML = "";
    })

    //          Delete Practise table
    x = document.querySelector(".practiseInput");

    x.innerHTML = "";

    //          Recheck inputs to reshow the warning messages
    callAll(0);

}


//      What comes after pressing the Check button
function Validation() {

    const buttton = document.querySelector(".check");

    buttton.addEventListener('click', () => {

        //          check if the form is typed correctly

        //alert("Success");

        globalValid = 0;   
        callAll(0, 1);

        //alert(globalValid);

        if (globalValid != 5) {
            Swal.fire({
                title: 'Failed',
                text: 'Invalid Inputs :(',
                icon: 'warning',
            })
        }

        else Swal.fire({

            title: 'Are you sure?',
            text: 'The next part will update accordingly to what you have typed',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Nou',
            confirmButtonColor: 'rgb(210, 30, 30)',

        }).then((result) => {

            if (result.isConfirmed) {

                afterValidation();

            };

        });

    });

}


//      After check
function afterValidation() {

    //          Make check and warning section disappear, reset appear
    var x = document.querySelector(".check");
    x.style.display = "none";

    var x = document.querySelector(".reset");
    x.style.display = "block";

    x = document.querySelector(".warning.student");
    x.style.display = "none";

    x = document.querySelector(".tip.course");
    x.style.display = "block";


    //          Clearing the warning textbox
    var Warning = document.querySelector(".warning");

    Warning.innerHTML = "";


    //          Lock all inputs into their HTMLs
    var testing = document.querySelectorAll(".forInsert td input");
    var i = 1;
    testing.forEach((row) => {

        //alert(row.value);
        var tempt = document.querySelector(".forInsert td:nth-child("+i+")");
        tempt.innerHTML = row.value;

        i++;
    });

    //          Call function from inputCourse.js and inputPractise.js, possible because both files has been referenced in the HTML file before this JS file
    courseCreate(globalDep);
    practiseCreate();

}
