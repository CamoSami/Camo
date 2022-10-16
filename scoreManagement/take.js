
function getBoardData() {

    document.querySelectorAll("td a").forEach(link => {

        link.addEventListener('click', (e) => {

            localStorage.setItem("test", e.target.parentElement.parentElement.innerHTML);

            window.location.href="scoreBoard.html";
        });

    });

};




