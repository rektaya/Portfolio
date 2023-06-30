document.addEventListener("DOMContentLoaded", function(event) {
    console.log("hello")
    const burger = document.getElementById('burger');
    const nav = document.querySelector('.side-menu');
    console.log(nav)
    let menuClosed = true;
    burger.addEventListener("click", function(event) {
        if (menuClosed) {
            menuClosed = false;
            nav.classList.remove('hidden');
            document.body.classList.add('no-scroll');
        }
    })

    nav.addEventListener("click", function(event) {
        if(!menuClosed){
            menuClosed = true;
            nav.classList.add('hidden');
            document.body.classList.remove('no-scroll');            
        }
    })
})