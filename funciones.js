let nombreProductoA = 'Mesa';
let stockProductoA = 10;
let precioProductoA = 10000;

let nombreProductoB = 'Silla';
let stockProductoB = 20;
let precioProductoB = 2000;

let cantidadComprada;
let precioTotalVenta = 0;

function stockInsuficiente(stock){
    alert("No hay stock suficiente, puede comprar hasta " + stock + " unidades")
}


function stockSuficiente(stock, precio, nombre ){
    stock -= cantidadComprada;
    precioTotalVenta += cantidadComprada * precio;
    console.log("Quedan " + stock + nombre)    
}

function compra(stock, precio, nombre) {
    cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar: ")); /*Se puede definir por fuera*/
    if(cantidadComprada <= stock){
    stockSuficiente(stock, precio, nombre)
    }
    else{
        stockInsuficiente(stock)
    }
}

let cantidadProductosComprados = parseInt(prompt("Ingrese la cantidad de productos que quiere comprar"))

for(let i = 0; i < cantidadProductosComprados ; i++){ //Va a repetir el ciclo la cantidad de veces = a cantidad de productos que quiera comprar el cliente
    let nombreCompra = prompt ("Ingrese el nombre del producto que quiere comprar: ")

if (nombreCompra == nombreProductoA){
    compra(stockProductoA, precioProductoA, nombreProductoA)
}
else if (nombreCompra == nombreProductoB){
    compra(stockProductoB, precioProductoB, nombreProductoB)
}
else{
    alert("No tenemos ese producto")
}
}
alert("El precio total de su compra es de $" + precioTotalVenta)
