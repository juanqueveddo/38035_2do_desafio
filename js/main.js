// SIMULADOR INTERACTIVO

const remeraNegra = 1500;
const remeraBlanca = 1500;
const buzoNegro = 4000;
const buzoBlanco = 4000;
const pantalonNegro = 6000;
const pantalonBlanco = 6000;

let compraProducto = (mostrar) => {
    alert("¡Bienvenido a Avellaneda!");
    let limite = parseInt(prompt("¿Cuantos productos desea elegir?"));
    // POR SI ESCRIBE STRING EN VEZ DE NUMERO
    if (isNaN(limite)) {
        alert("Elija un número por favor.")
        return
    }
    for (i = 1; i <= limite; i++) {
        let ropa = prompt("Tenemos \n 1. Remera negra \n 2. Remera blanca \n 3. Buzo negro \n 4. Buzo blanco \n 5. Pantalón negro \n 6. Pantalón blanco");
        if (ropa == "1") {
            console.log("$" + remeraNegra)
        } else if (ropa == "2") {
            console.log("$" + remeraBlanca)
        } else if (ropa == "3") {
            console.log("$" + buzoNegro)
        } else if (ropa == "4") {
            console.log("$" + buzoBlanco)
        } else if (ropa == "5") {
            console.log("$" + pantalonNegro)
        } else if (ropa == "6") {
            console.log("$" + pantalonBlanco)
        }
    }
    alert("¡Gracias por comprar en Avellaneda, hasta luego!")
}

compraProducto()