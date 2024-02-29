const text = document.getElementById('text');

let p = document.getElementById("some");
document.getElementById("but").addEventListener("click", () => {
    const textVal = text.value;
    p.innerText = textVal;
})
