//          Dictionary for each department, containing their respective subjects, only filled one because I don't know their curriculum
const DepSubjects = new Array(3);
DepSubjects[0] = [
    'Physical Education F2', 'Programming Technique', 'Mathematical Analysis 1', 'Lenins Economical Politics', 'Lenins Philosophy', 'Linear Algebra', 'National Defence Education 3', 'Physics', 'National Defence Education 4', 'Statistic Probability', 'Science of Socialism', 'English A1', 'System Maintenance', 'General Study of IT', 'National Defence Education 2', 'English A2', 'Introduction to IT', 'Mathematical Analysis 2', 'Physical Education F1', 'English B1', 'National Defence Education 1'
];
DepSubjects[1] = [
    'Physical Education F2', 'Programming Technique', 'Mathematical Analysis 1'
];
DepSubjects[2] = [
    'Physical Education F2', 'Programming Technique', 'Mathematical Analysis 1'
];


function courseCreate(id) {
    +id--;
    // alert(id);

    //          Create table sections to input grades
    //          Getting the table element
    var create = document.querySelector("table.inputForCourse tbody");
    // alert(create);

    //          Reference for loop
    var ref = document.querySelectorAll("table.inputForCourse tbody tr:first-of-type th");
    // console.log(ref);
    var forLocateElement = 0;


    if (id >= 0) DepSubjects[id].forEach((subject) => {

        // console.log(subject)

        var i = 0;

        create.appendChild(document.createElement('tr'));
        
        ref.forEach((refTH) => {

            //          Create elements based on a predetermined form
            i++;
            forLocateElement++;

            var des = document.querySelector("table.inputForCourse tbody tr:last-of-type");
            des.appendChild(document.createElement('td'));

            des = document.querySelector("table.inputForCourse tbody tr:last-of-type td:last-of-type");
            des.appendChild(document.createElement('input'));
            

            des = document.querySelector("table.inputForCourse tbody tr:last-of-type td:last-of-type input");
            if (i <= 1) {
                des.setAttribute("type", "text");
                des.setAttribute("oninput", "CorrectText("+forLocateElement+")");
                des.setAttribute("onblur", "CorrectText("+forLocateElement+")");
                des.setAttribute("onfocus", "tipCourseID()");
            }
            else if (i <= 2) {
                des.value = subject;
                des.setAttribute("type", "text");
                des.setAttribute("oninput", "CorrectText("+forLocateElement+")");
                des.setAttribute("onblur", "CorrectText("+forLocateElement+")");
                des.setAttribute("onfocus", "tipCourseName()");
            }
            else if (i <= 7) {
                des.setAttribute("type", "number");
                des.setAttribute("oninput", "CorrectDigit("+forLocateElement+")");
                des.setAttribute("onblur", "CorrectDigit("+forLocateElement+")");
                des.setAttribute("onfocus", "tipNumber()");
            }
            else if (i <= 8) {
                des.setAttribute("type", "text");
                des.setAttribute("oninput", "correctFinal("+forLocateElement+")");
                des.setAttribute("onfocus", "tipFinal()");
            }
            else {
                des.setAttribute("type", "number");
                des.setAttribute("oninput", "correctScore("+forLocateElement+")");
                des.setAttribute("onfocus", "tipScore()");
            }

        });


    });

    else for (var temp = 0; temp < 21; temp++) {

        var i = 0
        

        create.appendChild(document.createElement('tr'));
        
        ref.forEach((refTH) => {

            i++;
            forLocateElement++;

            //          Create elements

            var des = document.querySelector("table.inputForCourse tbody tr:last-of-type");
            des.appendChild(document.createElement('td'));

            des = document.querySelector("table.inputForCourse tbody tr:last-of-type td:last-of-type");
            des.appendChild(document.createElement('input'));

            des = document.querySelector("table.inputForCourse tbody tr:last-of-type td:last-of-type input");


            if (i <= 1) {
                des.setAttribute("type", "text");
                des.setAttribute("oninput", "CorrectText("+forLocateElement+")");
                des.setAttribute("onblur", "CorrectText("+forLocateElement+")");
                des.setAttribute("onfocus", "tipCourseID()");
            }
            else if (i <= 2) {
                des.setAttribute("type", "text");
                des.setAttribute("oninput", "CorrectText("+forLocateElement+")");
                des.setAttribute("onblur", "CorrectText("+forLocateElement+")");
                des.setAttribute("onfocus", "tipCourseName()");
            }
            else if (i <= 7) {
                des.setAttribute("type", "number");
                des.setAttribute("oninput", "CorrectDigit("+forLocateElement+")");
                des.setAttribute("onblur", "CorrectDigit("+forLocateElement+")");
                des.setAttribute("onfocus", "tipNumber()");
            }
            else if (i <= 8) {
                des.setAttribute("type", "text");
                des.setAttribute("oninput", "correctFinal("+forLocateElement+")");
                des.setAttribute("onfocus", "tipFinal()");
            }
            else {
                des.setAttribute("type", "number");
                des.setAttribute("oninput", "correctScore("+forLocateElement+")");
                des.setAttribute("onfocus", "tipScore()");
            }


        });

    }

    //      Make table reappears
    x = document.querySelectorAll(".appearLater");

    x.forEach((element) => {

        element.style.display = "block";
        element.style.overflow = "auto";

    })

};


//          Check input section
function CorrectText(id) {
    //alert("Success");

    //          Calculation to take the right input with the given id
    var calcTD = id % +11;
    if (!calcTD) calcTD += +11;

    var calcTR = 2;
    while (id > 11) {
        id -= 11
        calcTR += +1;
    }

    //console.log(id + " " + calcTR + " " + calcTD);

    take = document.querySelector(".inputForCourse tbody tr:nth-child("+calcTR+") td:nth-child("+calcTD+") input")

    if (take.value.length == 0) {
        take.parentElement.style.background = "red";
    }
    else take.parentElement.style.background = "";

}
function CorrectDigit(id) {
    
    var calcTD = id % +11;
    if (!calcTD) calcTD += +11;

    var calcTR = 2;
    while (id > 11) {
        id -= 11
        calcTR += +1;
    }
    
    take = document.querySelector(".inputForCourse tbody tr:nth-child("+calcTR+") td:nth-child("+calcTD+") input")

    if (/^[0-9]$/.test(take.value) == false) {
        take.parentElement.style.background = "red";
    }
    else take.parentElement.style.background = "";

};
function correctFinal(id) {

    var calcTD = id % +11;
    if (!calcTD) calcTD += +11;

    var calcTR = 2;
    while (id > 11) {
        id -= 11
        calcTR += +1;
    }
    
    take = document.querySelector(".inputForCourse tbody tr:nth-child("+calcTR+") td:nth-child("+calcTD+") input")
    var pass = "PASS";
    var failed = "FAILED";

    if (!(take.value.indexOf(pass) != -1 && take.value.length == 4) && !(take.value.indexOf(failed) != -1 && take.value.length == 6)) {
        take.parentElement.style.background = "red";
    }
    else take.parentElement.style.background = "";

};
function correctScore(id) {
    
    var calcTD = id % +11;
    if (!calcTD) calcTD += +11;

    var calcTR = 2;
    while (id > 11) {
        id -= 11
        calcTR += +1;
    }
    
    take = document.querySelector(".inputForCourse tbody tr:nth-child("+calcTR+") td:nth-child("+calcTD+") input")

    if (+take.value < 0 || +take.value > 10) {
        take.parentElement.style.background = "red";
    }
    else take.parentElement.style.background = "";

}


//          Tip section
function tipCourseID() {
    var tipLocate = document.querySelector(".tip.course");
    tipLocate.innerHTML = "The ID of the course";
}
function tipCourseName() {
    var tipLocate = document.querySelector(".tip.course");
    tipLocate.innerHTML = "The full name of the course";
}
function tipNumber() {
    var tipLocate = document.querySelector(".tip.course");
    tipLocate.innerHTML = "A single digit representing the data";
}
function tipFinal() {
    var tipLocate = document.querySelector(".tip.course");
    tipLocate.innerHTML = "PASS or FAILED?";
}
function tipScore() {
    var tipLocate = document.querySelector(".tip.course");
    tipLocate.innerHTML = "The score of the student";
}