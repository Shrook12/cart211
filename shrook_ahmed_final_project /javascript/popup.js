//this is for the impact page


let isMenuOpen = false;
let isScrollingDisabled = false;

//for menu

function toggleMenu() {
    const button = document.getElementById('menuButton');
    const popup = document.getElementById('menuPopup');


    button.classList.toggle('open');
    popup.classList.toggle('open');


    isMenuOpen = popup.classList.contains('open');


    if (isMenuOpen) {

        isScrollingDisabled = true;
    } else {

        setTimeout(() => {
            isScrollingDisabled = false;
        }, 350);
    }
}



const isMobile = window.matchMedia("(max-width: 768px)");
const sections = document.querySelectorAll(".section");


if (!isMobile.matches) {
    let targetX = 0;
    let currentX = 0;
    const speed = 0.06;
    const maxScroll = (window.innerWidth + 200) * (sections.length - 1);

    // Mouse Wheel Logic (updated with check)
    window.addEventListener("wheel", (e) => {
        if (!isScrollingDisabled) { // Check the flag here
            targetX += e.deltaY;
            targetX = Math.max(0, Math.min(maxScroll, targetX));
        }
    });

    // Touch/Swipe Logic
    let startX = 0;
    let movingX = 0;
    let initialTargetX = 0;
    window.addEventListener("touchstart", (e) => {
        if (!isScrollingDisabled) { // Check the flag here
            startX = e.touches.clientX;
            initialTargetX = targetX;
        }
    });
    window.addEventListener("touchmove", (e) => {
        if (!isScrollingDisabled) { // Check the flag here
            movingX = e.touches.clientX;
            let deltaX = startX - movingX;
            targetX = initialTargetX + deltaX;
            targetX = Math.max(0, Math.min(maxScroll, targetX));
        }
    });


    // Animation Loop and Section Opacity Logic 
    function animate() {
        if (!isScrollingDisabled) { // Check the flag here
            currentX += (targetX - currentX) * speed;
            window.scrollTo(currentX, 0);
            updateSections(currentX);
        }
        requestAnimationFrame(animate);
    }

    animate();

    function updateSections(x) {
        const vw = window.innerWidth;
        sections.forEach((sec, i) => {
            const center = i * (vw + 200);

            if (Math.abs(x - center) < vw * 0.45) {
                sec.classList.add("active");
            } else {
                sec.classList.remove("active");
            }
        });
    }

} else {
    // Mobile view 
    sections.forEach(sec => {
        sec.classList.add("active");
    });
}

// this is for the pop up
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('close-modal');
const thirdSection = document.getElementById('s3'); // Ensure this ID exists in HTML

let stopPopupsPermanently = false;

function showModal() {
    if (!stopPopupsPermanently && thirdSection && !modal.classList.contains('show-modal')) {
        modal.classList.add('show-modal');
    }
}

function hideModal() {
    modal.classList.remove('show-modal');
}

const popupIntervalId = setInterval(showModal, 1000);

closeModalButton.addEventListener('click', hideModal);

// Intersection Observer Code 
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

if (thirdSection) {
    const sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                hideModal();
                stopPopupsPermanently = true;
                clearInterval(popupIntervalId);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionObserver.observe(thirdSection);
}





