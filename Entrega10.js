
//Cambiar Theme

document.getElementById("theme").addEventListener("click", themeChanger)
let temaActual = "light"

function themeChanger(e){
    if(temaActual == "light"){
    document.getElementById("main").className = "dark";
    temaActual = "dark"
    } else {
        document.getElementById("main").className = "light";
        temaActual = "light"
    }
}

//Crear Objeto

class mobiliario{
    constructor(precio, stock){
    this.precio = precio
    this.stock = stock
}
}

//Declarar Objetos
let puffs = new mobiliario(200, 60)
let mesas = new mobiliario(500, 6)
let tronos = new mobiliario(2000, 1)
let gazebos = new mobiliario(1500, 2)

document.getElementById("resultados").addEventListener("click", imprimir)

//Impresion

function imprimir(e){
    let valUno = 0
    let valDos = 0
    let valTres = 0
    let valCuatro = 0
    let pcs = parseInt(document.getElementById("pc").value)
    let mcs = parseInt(document.getElementById("mc").value)
    let tcs = parseInt(document.getElementById("tc").value)
    let gcs = parseInt(document.getElementById("gc").value)
    console.log("El costo total es: " +((pcs*200)+(mcs*500)+(tcs*2000)+(gcs*1500)))
    if(isNaN(pcs) || pcs>puffs.stock){
        let toprint = "Puffs: Valor no valido (no es un numero o supera el stock disponible)"
        let nodoPrint = document.createElement("p")
        let textoPrint= document.createTextNode(toprint)
        nodoPrint.appendChild(textoPrint)
        document.getElementById("impresion").appendChild(nodoPrint)
        pcs = 0
    } else {
        valUno = puffs.precio*pcs
        let toprint = "Puffs: $" + valUno  
        let nodoPrint = document.createElement("p")
        let textoPrint= document.createTextNode(toprint)
        nodoPrint.appendChild(textoPrint)
        document.getElementById("impresion").appendChild(nodoPrint)
    }
    if(isNaN(mcs) || mcs>mesas.stock){
        let toprint = "Mesas: Valor no valido (no es un numero o supera el stock disponible)"
        let nodoPrint = document.createElement("p")
        let textoPrint= document.createTextNode(toprint)
        nodoPrint.appendChild(textoPrint)
        document.getElementById("impresion").appendChild(nodoPrint)
        mcs = 0
    } else {
        valDos = mesas.precio*mcs
        let toprint = "Mesas: $" + valDos 
        let nodoPrint = document.createElement("p")
        let textoPrint= document.createTextNode(toprint)
        nodoPrint.appendChild(textoPrint)
        document.getElementById("impresion").appendChild(nodoPrint)
    }
    if(isNaN(tcs) || tcs>tronos.stock){
        let toprint = "Tronos: Valor no valido (no es un numero o supera el stock disponible)"
        let nodoPrint = document.createElement("p")
        let textoPrint= document.createTextNode(toprint)
        nodoPrint.appendChild(textoPrint)
        document.getElementById("impresion").appendChild(nodoPrint)
        tcs = 0
    } else {
        valTres = tronos.precio*tcs
        let toprint = "Tronos: $" + valTres
        let nodoPrint = document.createElement("p")
        let textoPrint= document.createTextNode(toprint)
        nodoPrint.appendChild(textoPrint)
        document.getElementById("impresion").appendChild(nodoPrint)
    }
    if(isNaN(gcs) || gcs>gazebos.stock){
        let toprint = "Gazebos: Valor no valido (no es un numero o supera el stock disponible)"
        let nodoPrint = document.createElement("p")
        let textoPrint= document.createTextNode(toprint)
        nodoPrint.appendChild(textoPrint)
        document.getElementById("impresion").appendChild(nodoPrint)
        gcs = 0
    } else {
        valCuatro = gazebos.precio*gcs 
        let toprint = "Gazebos: $" + valCuatro
        let nodoPrint = document.createElement("p")
        let textoPrint= document.createTextNode(toprint)
        nodoPrint.appendChild(textoPrint)
        document.getElementById("impresion").appendChild(nodoPrint)
    }
        let toprint = "Total: $" + (valUno+valDos+valTres+valCuatro) 
        let nodoPrint = document.createElement("p")
        let textoPrint= document.createTextNode(toprint)
        nodoPrint.appendChild(textoPrint)
        document.getElementById("impresion").appendChild(nodoPrint)
}

let stockPuffs = 0
let stockMesas = 0
let stockTronos = 0
let stockGazebos = 0