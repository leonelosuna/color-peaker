const color = document.querySelector("#color")
const salida = document.querySelector("#salida")

// console.log(color.value)

//eventos
color.addEventListener("input", ()=> {
    console.log(color.value)
    salida.innerHTML = `<h2>${color.value}</h2>`
    salida.style.background = color.value
})