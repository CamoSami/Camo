//          Create Practise table
function practiseCreate() {

    var create = document.querySelector(".practiseInput");

    for (var i = 1; i <= 21; i++) {

        create.appendChild(document.createElement("td"));
        
        var locate = document.querySelector(".practiseInput td:nth-child("+i+")");
        locate.appendChild(document.createElement("input"));

        locate = document.querySelector(".practiseInput td:nth-child("+i+") input");

        locate.setAttribute("type", "number");
        locate.setAttribute("oninput", "calTotal(), checkInput("+i+")");
        locate.setAttribute("onblur", "checkInput("+i+")");

    }

}

function calTotal() {

    //          select all input
    grade = document.querySelectorAll(".practiseInput td input");
    var total = 0;

    grade.forEach((i) => {
        
        //console.log(i.value);

        //          + before value to turn text into value
        total += +i.value;

    })

    //          get element represent total
    ret = document.querySelector(".practiseInput td:last-of-type");
    //alert(ret.innerHTML);
    //alert(total);

    ret.textContent = "";
    ret.textContent = total;

    if (total > 100) ret.style.background = "red";
    else ret.style.background = "";
}

function checkInput(index) {
    //alert(index);

    target = document.querySelector(".practiseInput td:nth-child("+index+") input");
    //alert(target.value);

    if (+target.value < 0 || +target.value > 10 || target.value.length == "") {       
        target.parentElement.style.background = "red";
        //alert(temp);
    }

    else {
        target.parentElement.style.background = "";
    }

}