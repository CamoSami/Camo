function getDataToSB() {

    document.querySelectorAll("td a").forEach(link => {

        //          AddEventListener to detect on click and to detech the clicked target
        link.addEventListener('click', (e) => {

            //          LocalStorage persists as long as the web browser is opened, so it will be used to transfer data between HTML files
            localStorage.setItem("dataFromSearch", e.target.parentElement.parentElement.innerHTML);

            //console.log(dataFromSearch[0]);

            window.location.href = "scoreBoard.html";

        });

    });

};


function setDataToSB() {

    var tempt = document.querySelector(".studentDataReq");

    tempt.innerHTML = localStorage.getItem("dataFromSearch");

};


function getDataToFix() {

    var checkFix = 1;
    localStorage.setItem("checkFix", checkFix);
    // alert("Success!");

    var studentValue = new Array(1);
    var i = 0;

    var tempt = document.querySelectorAll(".studentDataReq td");
    // alert(tempt);
    
    //          Make the innerHTML of student into an array
    tempt.forEach((value) => {
      
        i++;

        if (i == 1) {
            studentValue.push(value.firstChild.innerHTML);
        }
        else studentValue.push(value.innerHTML);

    })
    
    //          Make that array into a localStorage item
    localStorage.setItem("dataStudent", studentValue);



    //          Make the innerHTML of the SB into an array
    var courseValue = {};

    i = 0;
    tempt = document.querySelectorAll(".courseDataReq tr:nth-child(n + 2)");

    tempt.forEach((tr) => {

        // alert("Success!");
        i++;

        //          To dodge the table headers

        var j = 0;
        var temptt = tr.querySelectorAll("td");

        temptt.forEach((td) => {

            j++;

            //          To dodge the id of the table
            if (i in courseValue && j != 1) {

                // alert(td.innerHTML);
                courseValue[i].push(td.innerHTML);

            }
            else if (j != 1) {
                
                courseValue[i] = new Array(td.innerHTML);

            }

            // alert(courseValue[i]);
            localStorage.setItem("dataCourse"+i+"", courseValue[i]);

        });

        // alert(courseValue[i]);
        
    });
    localStorage.setItem("dataCourseLimit", i);


    //          Make the value of Practise into an array
    var practiseValue = new Array(1);

    tempt = document.querySelectorAll(".practiseDataReq td");
    
    //          Make the innerHTML of student into an array
    tempt.forEach((value) => {

    practiseValue.push(value.innerHTML);
        
    })

    localStorage.setItem("dataPractise", practiseValue);

    window.location.href = "../insert.html";

};


function setDataToFix() {

    var checkFix = localStorage.getItem("checkFix");

    if (checkFix) {

        //          Storage data for the student section
        var data = localStorage.getItem("dataStudent");

        //          For numerous purposes
        var i = 0;

        //          Split function splits the string into multiple substrings divided by the input of the function
        var dataStudent = data.split(",");

        dataStudent.forEach((input) => {

            //          Simply to dodge the first empty substring created by carelessness :p
            if (i != 0) {

                var tempt = document.querySelector(".forInsert td:nth-child("+i+") input");

                tempt.value = input;

            }

            i++;
        });

        //          Function from inputStudent.js to lock in the student data
        afterValidation();

        //          Storage data for the course section
        limit = localStorage.getItem("dataCourseLimit");

        //          For each string in object data
        for (var i = 1; i <= limit; i++) {

            // console.log("Success!");
            var subdata = localStorage.getItem("dataCourse"+i+"")
            var dataCourse = subdata.split(",");

            //          Again, for numerous purposes
            var j = 0;

            dataCourse.forEach((input) => {

                // console.log(input);
                j++

                var x = i + 1;

                tempt = document.querySelector(".inputForCourse tbody tr:nth-child("+x+") td:nth-child("+j+") input");
                tempt.value = input;

            })

        }

        //          Storage data for the practise section
        data = localStorage.getItem("dataPractise");
        i = 0;
        var dataPractise = data.split(",");

        dataPractise.forEach((input) => {

            if (i != 0) {
                
                if (i != 22) {

                    var tempt = document.querySelector(".practiseInput td:nth-child("+i+") input");
                    tempt.value = input;

                }

                else {

                    var tempt = document.querySelector(".practiseInput td:nth-child("+i+")");
                    tempt.innerHTML = input;

                }

            }

            i++;

        })

        //          Remove local storage so subsequent site visit doesn't reuse the data
        localStorage.removeItem("dataStudent");
        for (var i = 1; i <= limit; i++) localStorage.removeItem("dataCourse"+i+"");
        localStorage.removeItem("dataCourseLimit");
        localStorage.removeItem("dataPractise");

        localStorage.removeItem("checkFix");

    }


    

}