function Submit() {

    //alert("Success");
    const button = document.querySelector(".submit");

    button.addEventListener('click', () => {
        
        //          vastTest for check, forInputCheck to locate element later
        var vastTest = 1;
        var forInputCheck = 0;

        //          Select all input in Course to check if there's any left empty
        var selectAll = document.querySelectorAll(".inputForCourse tbody tr td input");

        selectAll.forEach((input) => {
        forInputCheck++;

            if (input.value.length == 0) {

                vastTest = 0;

                //          Change background and give an attribute to test if it is still empty
                input.parentElement.style.background = "red";
                input.parentElement.setAttribute("oninput", "checkInputCourse("+forInputCheck+")");

                console.log(input.parentElement);

            }

        })

        
        //          Reset variable for next use
        forInputCheck = 0;

        //          Select all input in Practise to check if there's any left empty
        selectAll = document.querySelectorAll(".practiseInput td input");

        selectAll.forEach((input) => {
            forInputCheck++;
            
            if (input.value.length == 0) {
                vastTest = 0;

                //          Change background and give an attribute to test if it is still empty
                input.parentElement.style.background = "red";

                console.log(input.parentElement);
            }
        })

        //          Select the total of Practise grades to check
        selectAll = document.querySelector(".practiseInput td:last-of-type");
        //alert(selectAll.innerHTML);

        if (+selectAll.innerHTML > 100) vastTest = 0;


        if (!vastTest) {

            Swal.fire({
                title: 'Failed',
                text: 'Some inputs are missing :(',
                icon: 'warning',
            })

        }
        else Swal.fire({

            title: 'Are you sure?',
            text: 'This will save what you have typed!',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Ya',
            cancelButtonText: 'Nou',
            confirmButtonColor: 'rgb(210, 30, 30)',

        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    title: 'Success!',
                    text: 'Maybe a cup of water?',
                    icon: 'success',
                }).then(function() {
                    window.location.href= "scoreManagement.html"
                });

            }
        })
        
        

    })
}

function checkInputCourse(id) {

    //          Calculation to take the right input with the given id
    var calcTD = id % +11;
    if (!calcTD) calcTD += +11;

    var calcTR = 2;
    while (id > 11) {
        id -= 11
        calcTR += +1;
    }

    //console.log(id + " " + calcTR + " " + calcTD);
    
    var take = document.querySelector(".inputForCourse tbody tr:nth-child("+calcTR+") td:nth-child("+calcTD+") input")

    if (take.value.length != 0) take.parentElement.style.background = "";
    else take.parentElement.style.background = "red";

}