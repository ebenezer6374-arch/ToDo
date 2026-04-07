function newElement() {
    const heading = document.getElementById("text");
    heading.textContent = "Today's Agenda";
    const input = document.getElementById("content");
    const inputVal = input.value.trim();
    if (inputVal === "") {
        alert("You must write some to-do");
        return;
    }
    const list = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.classList.add("task-text");
    textSpan.textContent = inputVal;
    const spanClose = document.createElement("span");
    spanClose.classList.add("close");
    spanClose.innerHTML = "&times;";
    list.appendChild(textSpan);
    list.appendChild(spanClose);
    const myList = document.getElementById("myList");
    myList.appendChild(list);
    list.addEventListener("click", function (ev) {
        if (ev.target.tagName === "LI" || ev.target.classList.contains("task-text")) {
            list.classList.toggle("checked");
        }
    });
    spanClose.addEventListener("click", function (e) {
        e.stopPropagation();        // Important: stop toggle when deleting
        list.style.display = "none";
    });
    input.value = "";
}