
const isMobile = window.matchMedia("(max-width: 768px)");
const sections = document.querySelectorAll(".section");

if (!isMobile.matches) {

    let targetX = 0;
    let currentX = 0;
    const speed = 0.06;


    const sectionTotalWidth = (window.innerWidth * 0.7) + 200;
    const maxScroll = (sectionTotalWidth) * (sections.length - 1);


    window.addEventListener("wheel", (e) => {
        targetX += e.deltaY;
        targetX = Math.max(0, Math.min(maxScroll, targetX));
    });


    let startX = 0;
    let movingX = 0;
    let initialTargetX = 0;
    window.addEventListener("touchstart", (e) => {
        startX = e.touches.clientX;
        initialTargetX = targetX;
    });
    window.addEventListener("touchmove", (e) => {
        movingX = e.touches.clientX;
        let deltaX = startX - movingX;
        targetX = initialTargetX + deltaX;
        targetX = Math.max(0, Math.min(maxScroll, targetX));
    });


    function animate() {
        currentX += (targetX - currentX) * speed;
        window.scrollTo(currentX, 0);

        updateSections(currentX);
        requestAnimationFrame(animate);
    }

    animate();

    function updateSections(x) {

        const vw70 = window.innerWidth * 0.7;

        sections.forEach((sec, i) => {
            const center = i * (vw70 + 200);


            if (Math.abs(x - center) < vw70 * 0.85) {
                sec.classList.add("active");
            } else {
                sec.classList.remove("active");
            }
        });
    }

} else {
    sections.forEach(sec => {
        sec.classList.add("active");
    });
}
// for progress line
let completed = 0;

function activate(id) {
    const item = document.getElementsByClassName("solution")[id - 1];

    if (!item.classList.contains("active")) {
        item.classList.add("active");

        // Increase progress by 16.6% for each item (100/6)
        completed += 16.6;

        if (completed > 100) completed = 100;

        document.getElementById("bar").style.width = completed + "%";
    }
}