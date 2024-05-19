//estructura html
//variables de js necesarias
//funciones esenciales del proceso a simular
//objetos de js
// metodos de busqueda y filtrado sobre el array

//capturar entradas mediante promt
//declarar variables y objetos necesarios para simular el procesos seleccionado
//crear funciones y metodos (suma,resta, concatenacion, division, porcentaje etc)
// efectuar una salida, que es el resultado de los datos procesados, la cual puede hacere por alert o console.log

/*
budin = 1000
macarron = 700
hojaldre = 250
carrotCake = 1500
iva = 1.21
cantidad
precioSinIva
descuento
factura
*/



/*let descuento =
let precioSinIva = function(){

}


let productoIva = function(){
    if (parseFloat(precioSinIva)){
        let resultado = ((precioSinIva * )- sumarProductos)
        alert("el importe mas iva es: " + resultado)
    }
}

const iva = 1.21
let total =
let cuotas =
let cantidad =*/



/*function precioSinIva (){
    if(resultado.length > 0){
        console.log(precio)
    }else{
        alert("disculpe por no tener lo que desea, tomaremos en cuenta su busqueda" + palabraClave)
    } 
}



function totalIva (){
    let total = Postre.precio
    return ((total*1.21)-total)
}

function factura (total){
    
}*/



/*do{
            let producto = prompt("nombre del producto")
            let cantidad = parseInt(prompt("ingrese cantidad unidades"))
            if(producto == "budin"){
            let total = budin * cantidad
            let monto = confirm(`${total} desea otro producto`)
            }else if(producto == "macarron"){
            let total = macarron * cantidad
            let monto = confirm(`${total} desea otro producto`)
            }else if(producto == "hojaldre"){
            let total = hojaldre * cantidad
            let monto = confirm(`${total} desea otro producto`)
            }else if(producto == "carrotCake"){
            let total = carrotCake * cantidad
            let monto = confirm(`${total} desea otro producto`)
            }else{
                alert("hasta luego")
            }
}while(monto == false)*/



const Postre = function (nombre,precio,stock){ // funcion constructora

    this.nombre= nombre
    this.precio= precio
    this.stock= stock

}

let postre1 = new Postre ("budin",1000,10)
let postre2 = new Postre ("macarron",700,40)
let postre3 = new Postre ("hojaldre",250,20)
let postre4 = new Postre ("carrotCake",1500,8)


let menu = [postre1,postre2,postre3,postre4]


function filtrarPostre(){
    
    let producto = prompt("ingresa tu busqueda").toUpperCase().trim()
    let resultado = menu.filter( (x)=>x.nombre.toUpperCase().includes(producto.toUpperCase()))

    if(resultado.length > 0){
        console.log(menu.filter((resultado)=>resultado.precio))    
    }else{
        alert("disculpe por no tener lo que desea, tomaremos en cuenta su busqueda" + producto)
    }
}
