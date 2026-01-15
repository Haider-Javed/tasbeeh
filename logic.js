let num = document.getElementById("num");
let reset = document.getElementById("reset");
let increament = document.getElementById("increament");


let count = parseInt(num.textContent);

increament.addEventListener("click", () => {
    count++;
    num.textContent = count;
});
document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    count++;
    num.textContent = count;
})
reset.addEventListener("click", () => {
    count = 0;
    num.textContent = count;
});
