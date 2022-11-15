console.log("Loaded");
document.querySelector(".languages").addEventListener("mouseover", () => {
    document.querySelector(".lang-list").classList.remove("hidden");

})
document.querySelector(".languages").addEventListener("mouseout", () => {
    document.querySelector(".lang-list").classList.add("hidden");

})

let list = document.querySelectorAll(".tab-list li");

Array.from(list).forEach( x => {
    
    x.addEventListener("click", (e) => {
        x = x.querySelector("a");
        e.preventDefault();
        document.querySelectorAll('.tab-list .active')[0].classList.remove('active')
        x.classList.add("active")
        let id = x.getAttribute("href");
        document.querySelectorAll(".tab.active")[0].classList.remove('active');
        document.querySelector(id).classList.add("active");

    })
})