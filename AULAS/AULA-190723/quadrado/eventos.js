let quadrado = document.querySelector("#quadrado");
let i = 0
console.log({quadrado})
quadrado.onclick = () => {
    quadrado.style.borderRadius = "100px"
    quadrado.style.backgroundColor = "#c3c3c3"
    quadrado.style.transform = "translateY(200px)"
}

quadrado.ondblclick = () => {
    quadrado.style.borderRadius = 0
    quadrado.style.backgroundColor = "#0d63cb"
    quadrado.style.transform = "translateY(0)"
}

function changeColorSquare (){
    quadrado.style.backgroundColor = "#219ebc"
}

quadrado.addEventListener ("mouseout", () => {
    quadrado.style.backgroundColor = "#f07167"
})