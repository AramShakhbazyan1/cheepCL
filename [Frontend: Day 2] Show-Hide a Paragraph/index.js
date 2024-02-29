let p = document.getElementById("but");
let hidenDiv = document.getElementById('someP');

document.getElementById("but").addEventListener("click", () => {
    if (p.textContent === "Show") {
        p.innerText = "Hide";
        hidenDiv.style.display = "block";
    } else {
        p.innerText = "Show";
        hidenDiv.style.display = "none";
    }
})
