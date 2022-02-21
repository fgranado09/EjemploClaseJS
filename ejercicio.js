let nombreProductoA = 'Mesa';
let stockProductoA = 10;
let precioProductoA = 10000;

let nombreProductoB = 'Silla';
let stockProductoB = 20;
let precioProductoB = 2000;

let cantidadComprada;
let precioTotalVenta = 0;


let cantidadProductosComprados = parseInt(prompt("Ingrese la cantidad de productos que quiere comprar"))

for(let i = 0; i < cantidadProductosComprados ; i++){ //Va a repetir el ciclo la cantidad de veces = a cantidad de productos que quiera comprar el cliente
    let nombreCompra = prompt ("Ingrese el nombre del producto que quiere comprar: ")

if (nombreCompra == nombreProductoA){
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar: ")); /*Se puede definir por fuera*/
    if(cantidadComprada <= stockProductoA){
    stockProductoA = stockProductoA - cantidadComprada;
    precioTotalVenta += cantidadComprada * precioProductoA;
    console.log("Quedan " + stockProductoA + "mesas")
   // alert("Su compra es de " + cantidadComprada + " " + nombreProductoA + "s" + ".El precio de su compra es de: $" + precioTotalVenta)
    }
    else{
        alert("No hay stock suficiente, puede comprar hasta " + stockProductoA + " unidades")
    }
}
else if (nombreCompra == nombreProductoB){
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar: "));
    if(cantidadComprada <= stockProductoB){
    stockProductoB = stockProductoB - cantidadComprada;
    precioTotalVenta += cantidadComprada * precioProductoB;
    console.log("Quedan " + stockProductoB + "sillas")
    //alert("Su compra es de " + cantidadComprada + " " + nombreProductoB + "s" + ".El precio de su compra es de: $" + precioTotalVenta)
    }
    else{
        alert("No hay stock suficiente, puede comprar hasta " + stockProductoB + " unidades")
    }

}
else{
    alert("No tenemos ese producto")
}
}
alert("El precio total de su compra es de $" + precioTotalVenta)




/* stockProductoA = stockProductoA - cantidadComprada;

let precioTotalVenta = cantidadComprada * precioProductoA;

alert ("El precio de su compra es de: $" + precioTotalVenta);
console.log ("Quedan " + stockProductoA + "mesas"); */
