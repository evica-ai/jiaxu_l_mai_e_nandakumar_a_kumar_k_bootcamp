(() => {
    console.log("slide & lightbox function in!");
    //varibles at the top
    const sigils = document.querySelector('.imgButton'),
        banner = document.querySelector('.imgContainer'),
        popup = document.querySelector('.popup');

    // functions go in the middle
    function animateBanner(event) {
        if (event.target.className.includes('sigil')) {
            let multiplier = event.target.dataset.offset,
                offsetWidth = -320;


            banner.style.left = `${multiplier * offsetWidth}px`;
            console.log("you clicked me");

        }

    }

    sigils.addEventListener('click', animateBanner);

    // //for promo info pop up

    // popUpButton.addEventListener('click', () => {
    //     card.style.visibility = "visible";
    //     card.style.opacity = 1;
    //     overlay.style.visibility = "visible";
    //     overlay.style.opacity = 1;
    // })

    // popUpClose.addEventListener('click', () => {
    //     card.style.visibility = "hidden";
    //     card.style.opacity = 0;
    //     overlay.style.visibility = "hidden";
    //     overlay.style.opacity = 0;

    // });

    const houseDescription = document.querySelector(".house-info");

    const houseInfo = [
        [`Lysol's Collaboration with Superme limited edition T-shirt`],
        [`Lysol White T-shirt`],
        [`Lysol baseball`],
        [`Lysol Maple syrup`],
        [`Lysol's Collaboration with NFL limited edition T-shirt doll`],
        [`Lysol cute dog dress`]
    ]


    function setHouseData(desc) {
        houseDescription.textContent = desc;
    }
    function popUp(event) {

        if (event.target.className.includes('sigil')) {
            popup.classList.add('show-popup');


            setHouseData(houseInfo[event.target.dataset.offset][0], houseInfo[event.target.dataset.offset][1]);

            popup.querySelector('.popUpClose').addEventListener('click', () => {

                popup.classList.remove('show-popup');
            })
        }

    }

    sigils.addEventListener('click', popUp);




})();



