let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")

burger.addEventListener("click", ()=>{
    burger.classList.toggle("burger_active")
    menu.classList.toggle("menu_active")
})


