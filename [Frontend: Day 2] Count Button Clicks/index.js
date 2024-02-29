
let p = document.getElementById("some");
document.getElementById("but").addEventListener("click", () => {
    p.innerText = `${++p.textContent}`;
})
