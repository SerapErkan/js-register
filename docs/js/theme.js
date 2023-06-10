
document.addEventListener("DOMContentLoaded", function () {
    let theme1 = document.getElementById("btn-1");
    theme1.onclick = themeOne;

    function themeOne() {
        document.documentElement.style.setProperty('--theme-1', '#1e90ff');
        localStorage.setItem('theme', '#1e90ff');

    }

    let theme2 = document.getElementById("btn-2");
    theme2.onclick = themeTwo;

    function themeTwo() {
        document.documentElement.style.setProperty('--theme-1', '#9c35e0');
        localStorage.setItem('theme', '#9c35e0');

    }
    let theme3 = document.getElementById("btn-3");
    theme3.onclick = themeThree;

    function themeThree() {
        document.documentElement.style.setProperty('--theme-1', '#019c35');
        localStorage.setItem('theme', '#019c35');

    }

    let theme4 = document.getElementById("btn-4");
    theme4.onclick = themeFour;

    function themeFour() {
        document.documentElement.style.setProperty('--theme-1', '#ff3030');
        localStorage.setItem('theme', '#ff3030');

    }

    let theme5 = document.getElementById("btn-5");
    theme5.onclick = themeFive;

    function themeFive() {
        document.documentElement.style.setProperty('--theme-1', '#fc3a74');
        localStorage.setItem('theme', '#fc3a74');

    }
    let theme6 = document.getElementById("btn-6");
    theme6.onclick = themeSix;

    function themeSix() {
        document.documentElement.style.setProperty('--theme-1', '#e07015');
        localStorage.setItem('theme', '#e07015');

    }


});

