// PRIMERA ENTREGA PROYECTO FINAL

const tienda = [{ "remeraNegra": 1500 }, { "remeraBlanca": 1500 }, { "buzoNegro": 4000 }, { "buzoBlanco": 4000 }, { "pantalonNegro": 6000 }, { "pantalonBlanco": 6000 }]

let compraProducto = (mostrar) => {
    alert("¡Bienvenido a HOUKY!");
    let limite = parseInt(prompt("¿Cuantos productos desea elegir?"));
    // POR SI ESCRIBE STRING EN VEZ DE NUMERO
    if (isNaN(limite)) {
        alert("Elija un número por favor.")
        return
    }
    for (i = 1; i <= limite; i++) {
        let ropa = prompt("Tenemos \n 1. Remera negra \n 2. Remera blanca \n 3. Buzo negro \n 4. Buzo blanco \n 5. Pantalón negro \n 6. Pantalón blanco");
        if (ropa == "1") {
            console.log("El precio de la remera negra es de $" + tienda[0].remeraNegra)
        } else if (ropa == "2") {
            console.log("El precio de la remera blanca es de $" + tienda[1].remeraBlanca)
        } else if (ropa == "3") {
            console.log("El precio del buzo negro es de $" + tienda[2].buzoNegro)
        } else if (ropa == "4") {
            console.log("El precio del buzo blanco es de $" + tienda[3].buzoBlanco)
        } else if (ropa == "5") {
            console.log("El precio del pantalon negro es de $" + tienda[4].pantalonNegro)
        } else if (ropa == "6") {
            console.log("El precio del pantalon blanco es de $" + tienda[5].pantalonBlanco)
        }
    }
    alert("¡Gracias por comprar en Houky, hasta luego!")
}

compraProducto()