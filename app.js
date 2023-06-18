const productos = [
    {id: 1, nombre: "Agujas RL" , categoria: "agujas", descripcion: "10RL x 15 Unidades", precio: 45.12},
    {id: 2, nombre: "Agujas RM" , categoria: "Agujas", descripcion: "10RL x 20 Unidades", precio: 38.64},
    {id: 3, nombre: "Maquina de agujas" , categoria: "maquinas", descripcion: "Maquina rotativa Pen", precio: 154.35}
    
];

let title = document.getElementById("soy-un-boton");
title.addEventListener("click",function(){
    saludar();
});

function saludar(){
    let nombre = prompt("ingrese su nombre")
    let mensaje = `Bienvenidx ${nombre} a InkStore`;
    alert (mensaje);

}

function mostrarOpciones(){

    let mensaje = 'Ingrese su opcion: \n [1] Agujas \n [2] Maquinas \n [3] Tintas';
    let opcion = prompt(mensaje);
    switch(opcion){
        case "1":
            buscarProducto("agujas");
        break;
        case "2":
            buscarProducto("maquinas");
        break;
        case "3":
            buscarProducto("tintas");
        break;
        default:
            alert("Opcion no encontrada")
        break;
    }

}

function buscarProducto(categoria){

    let busqueda = prompt("Ingrese el nombre del producto");
let filtro_producto = productos.filter(
    item => item.nombre.toLowerCase().includes(busqueda) === true && item.categoria.toLowerCase() === categoria.toLowerCase()

    );
    if(filtro_producto.length === 0 || filtro_producto === undefined ){
        alert("Producto no encontrado");

    }else{
 
        let info = '';
        filtro_producto.forEach((p, indice)=>{
            info += `
            Bucle: ${indice}
            Id: ${p.id}
            Nombre: ${p.nombre}
            Descripcion: ${p.descripcion}
            Precio: $${p.precio.toString()}
            `;
        });
    
        alert(info)
       
    }
    
    }
    
