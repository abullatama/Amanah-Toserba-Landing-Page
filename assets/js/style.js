const nav = document.querySelector(".bot-nav");
const toggle = document.querySelector("#toggle");
const toggleId = document.querySelector(".toggle");

function toggleMenu() {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        toggleId.querySelector("a").innerHTML = "<i class='fas fa-bars fa-2x'></i>";
    } else {
        nav.classList.add("active");
        toggleId.querySelector("a").innerHTML = "<i class='fas fa-times fa-2x'></i>";
    }
}

toggle.addEventListener("click", toggleMenu, false);

function tampilGambar() {
    const gambar = document.querySelector(".gambar");

    gambar.style.display = "block";
}

function tutupGambar() {
    const tutup = document.querySelector(".gambar");

    tutup.style.display = "none";
}