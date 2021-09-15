(() => {

    console.log('video popup function is linked!');
    // FOR VIDEO POP UP
    const videoButton = document.querySelector(".videoButton");
    const close = document.querySelector(".close");
    const lightBox = document.querySelector(".lightBox");
    const video = document.querySelector("video");

    // function popLightBox

    videoButton.addEventListener('click', () => {
        lightBox.style.visibility = "visible";
        lightBox.style.opacity = 1;
    });

    close.addEventListener('click', () => {
        lightBox.style.visibility = "hidden";
        lightBox.style.opacity = 0;

        video.pause();
        video.currentTime = 0;
    });

})();