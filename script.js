const modeButton = document.querySelector('.switch').addEventListener("change", function () {
    const wholePage = document.querySelectorAll('*')
    wholePage.forEach((item) => {
        item.classList.toggle('dark')
    });
})