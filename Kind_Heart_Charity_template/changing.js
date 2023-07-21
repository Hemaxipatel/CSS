function changebg() {
    let menu_fixed = document.querySelector(".top-info");
    let current = window.scrollY;

    if (current > 0) {
        menu_fixed.classList.add("topinfo-fixed")
    } else {
        menu_fixed.classList.remove("topinfo-fixed")
    }
}
window.addEventListener("scroll", changebg)