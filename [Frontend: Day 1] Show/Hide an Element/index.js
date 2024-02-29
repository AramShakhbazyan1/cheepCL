let p = document.getElementById("but");
document.getElementById("but").addEventListener("click", () => {
    p.textContent === "Hello" ? p.innerText = "Goodbye" : p.innerText = "Hello"
})
p.inn