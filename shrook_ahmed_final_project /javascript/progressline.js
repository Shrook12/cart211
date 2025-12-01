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