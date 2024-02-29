let p = document.getElementById("div");

let buttons = document.getElementsByClassName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        p.style.backgroundColor = this.textContent;
    });
}
