let lastScrollY = 0;
let scrollTimeout;

window.addEventListener("scroll", function() {
    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
        var navbar = document.querySelector(".navbar");
        if (window.scrollY > lastScrollY + 20 && window.scrollY > 20) { // Adding a threshold of 10px
            navbar.classList.add("shrink", "py-2");
        } else if (window.scrollY < lastScrollY - 50 || window.scrollY <= 100) { // Adding a threshold of 10px
            navbar.classList.remove("shrink", "py-2");
        }
        lastScrollY = window.scrollY;
    }, 10);
});

function toggleMenu() {
    document.getElementById("menu-dropdown").classList.toggle("hidden");
}

window.addEventListener("click", function(event) {
    var menuDropdown = document.getElementById("menu-dropdown");
    var mobileMenuButton = document.querySelector(".mobile-menu");
    if (!menuDropdown.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        menuDropdown.classList.add("hidden");
        document.querySelectorAll('.desktop-menu').forEach(menu => {
            menu.classList.remove('hidden');
        });
    }
});