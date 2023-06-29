document.addEventListener("DOMContentLoaded", function(event) {
    const burger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    console.log(burger);
    let menu = 'closed';
    burger.addEventListener("click", function(event) {
        if (menu == 'closed') {
            menu = 'opened';
            nav.classList.remove('menu-closed');
            nav.classList.add('menu-opened');
        } else {
            menu = 'closed';
            nav.classList.remove('menu-opened');
            nav.classList.add('menu-closed');
        }
    })


    const readMe = document.getElementById("target");
    const hiddenP = document.querySelector(".hidden");
    console.log(readMe);
    console.log(hiddenP);

    readMe.addEventListener("click", function(event) {
        console.log('clicked');
        hiddenP.classList.remove("hidden");
        readMe.classList.add("hidden");
        event.preventDefault();
    })
}