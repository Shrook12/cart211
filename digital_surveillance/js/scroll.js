// Check if the screen is considered "mobile" (matches CSS breakpoint)
const isMobile = window.matchMedia("(max-width: 768px)");

// Only run the custom JS logic if it is NOT mobile
if (!isMobile.matches) {

    let targetX = 0;
    let currentX = 0;
    const speed = 0.06;
    const sections = document.querySelectorAll(".section");

    // Recalculate maxScroll as the original calculation was tied to window.innerWidth + 200
    // Since you only have 2 sections, the total scroll range is one section width + margin
    const maxScroll = (window.innerWidth + 200) * (sections.length - 1);

    // Mouse Wheel Logic
    window.addEventListener("wheel", (e) => {
        targetX += e.deltaY;
        targetX = Math.max(0, Math.min(maxScroll, targetX));
    });

    // Touch/Swipe Logic (from previous answer)
    let startX = 0;
    let movingX = 0;
    let initialTargetX = 0;
    window.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX; // Use touches[0] instead of just touches.clientX
        initialTargetX = targetX;
    });
    window.addEventListener("touchmove", (e) => {
        movingX = e.touches[0].clientX;
        let deltaX = startX - movingX;
        targetX = initialTargetX + deltaX;
        targetX = Math.max(0, Math.min(maxScroll, targetX));
    });


    // Animation Loop and Section Opacity Logic
    function animate() {
        currentX += (targetX - currentX) * speed;
        // window.scrollTo is what makes the actual scroll happen
        window.scrollTo(currentX, 0);

        updateSections(currentX);
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
    // Mobile view: Remove the opacity transition logic 
    // because standard vertical scroll handles visibility naturally
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => {
        sec.classList.add("active");
    });
}
