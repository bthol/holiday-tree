
function adjustScreen() {
    const screen = document.body.querySelector(`.tree-container`);
    screen.style.height = `${window.innerHeight * .75}px`;
    screen.style.width = `${window.innerWidth * .75}px`;
};
adjustScreen();

screen.addEventListener("resize", adjustScreen);