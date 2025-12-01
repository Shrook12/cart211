function toggleMenu() {
    const button = document.getElementById('menuButton');
    const popup = document.getElementById('menuPopup');

    button.classList.toggle('open');
    popup.classList.toggle('open');
}