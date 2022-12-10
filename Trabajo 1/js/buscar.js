import { restaurants } from './index.js';
const boton = document.getElementById("boton");



boton.addEventListener("click", buscador);

let verdadero = false;
let obtener2 = "";
function buscador(){

let obtener = document.getElementById('search').value;

if(obtener2!=obtener){
    
    if(verdadero==true){
        
        console.log("Primer IF");
        if(((restaurants[0].nombre||restaurants[1].nombre||restaurants[2].nombre||restaurants[3].nombre)==obtener) && (obtener2!=obtener)){
    caja2.removeChild(ciudad);
    caja2.removeChild(direccion);
    caja2.removeChild(desb);
    //caja2.removeChild(titulo);
    cajaPL.removeChild(caja2);
    cajaimg.removeChild(imagenPL)
    cajaPL.removeChild(cajaimg);
    conjunto.removeChild(cajaPL);
    console.log("Segundo IF-1");        
    verdadero=false;
            
        }else {
            caja2.removeChild(ciudad);
            caja2.removeChild(direccion);
            caja2.removeChild(desb);
           // caja2.removeChild(titulo);
            cajaPL.removeChild(caja2);
            cajaimg.removeChild(imagenPL)
            cajaPL.removeChild(cajaimg);
            conjunto.removeChild(cajaPL);
    console.log("Segundo IF-2");        
    verdadero=false;
        }
  
};
    
};

if(restaurants[0].nombre==obtener && obtener!=obtener2){
    
    
    const conjunto = document.getElementById('conjunto');
    const caja = document.createElement("div");
    caja.setAttribute("id","cajaPL");
    
    caja.setAttribute("class","galeria");
    
    caja.setAttribute("style"," margin-top: 7rem");
    conjunto.appendChild(caja);
    
    
    const cajaimg = document.createElement("div");
    cajaimg.setAttribute("id","cajaimg");
    
    cajaimg.setAttribute("class","galeria");
    
    caja.appendChild(cajaimg);
    
    
    const imagen = document.createElement("img");
    imagen.setAttribute("id", "imagenPL");
    imagen.setAttribute("src", "./img/CHINA.jpg");
    
    cajaimg.appendChild(imagen);
    
    
    const caja2 = document.createElement("div");
    caja2.setAttribute("id", "caja2");
    caja2.setAttribute("class","pie");
    
    caja.appendChild(caja2);
    
    
    const titulo = document.createElement("p");
    titulo.setAttribute("id","titulo");
    
    titulo.textContent = restaurants[0].nombre;
    caja2.appendChild(titulo);
    
    
    const desb = document.createElement("p");
    desb.setAttribute("id","desb");
    desb.textContent = restaurants[0].descrip;
    caja2.appendChild(desb);
    
    const direccion = document.createElement("p");
    direccion.setAttribute("id","direccion");
    
    direccion.textContent = restaurants[0].direccion;
    caja2.appendChild(direccion);
    
    
    const ciudad = document.createElement("p");
    ciudad.setAttribute("id","ciudad");
    
    
    ciudad.textContent = restaurants[0].ciudad;
    caja2.appendChild(ciudad); 
    
    
    verdadero = true;
    

};

if(restaurants[1].nombre==obtener && obtener!=obtener2){

const conjunto = document.getElementById('conjunto');
const caja = document.createElement("div");
caja.setAttribute("id","cajaPL");

caja.setAttribute("class","galeria");

caja.setAttribute("style"," margin-top: 7rem");
conjunto.appendChild(caja);


const cajaimg = document.createElement("div");
cajaimg.setAttribute("id","cajaimg");

cajaimg.setAttribute("class","galeria");

caja.appendChild(cajaimg);


const imagen = document.createElement("img");
imagen.setAttribute("id", "imagenPL");
imagen.setAttribute("src", "./img/COLOMBIANA.jpg");

cajaimg.appendChild(imagen);


const caja2 = document.createElement("div");
caja2.setAttribute("id", "caja2");
caja2.setAttribute("class","pie");

caja.appendChild(caja2);


const titulo = document.createElement("p");
titulo.setAttribute("id","titulo");

titulo.textContent = restaurants[1].nombre;
caja2.appendChild(titulo);


const desb = document.createElement("p");
desb.setAttribute("id","desb");
desb.textContent = restaurants[1].descrip;
caja2.appendChild(desb);

const direccion = document.createElement("p");
direccion.setAttribute("id","direccion");

direccion.textContent = restaurants[1].direccion;
caja2.appendChild(direccion);


const ciudad = document.createElement("p");
ciudad.setAttribute("id","ciudad");


ciudad.textContent = restaurants[1].ciudad;
caja2.appendChild(ciudad); 


verdadero = true;

};
if(restaurants[2].nombre==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('conjunto');
    const caja = document.createElement("div");
    caja.setAttribute("id","cajaPL");
    
    caja.setAttribute("class","galeria");
    
    caja.setAttribute("style"," margin-top: 7rem");
    conjunto.appendChild(caja);
    
    
    const cajaimg = document.createElement("div");
    cajaimg.setAttribute("id","cajaimg");
    
    cajaimg.setAttribute("class","galeria");
    
    caja.appendChild(cajaimg);
    
    
    const imagen = document.createElement("img");
    imagen.setAttribute("id", "imagenPL");
    imagen.setAttribute("src", "./img/C_RAPIDA.jpg");
    
    cajaimg.appendChild(imagen);
    
    
    const caja2 = document.createElement("div");
    caja2.setAttribute("id", "caja2");
    caja2.setAttribute("class","pie");
    
    caja.appendChild(caja2);
    
    
    const titulo = document.createElement("p");
    titulo.setAttribute("id","titulo");
    
    titulo.textContent = restaurants[2].nombre;
    caja2.appendChild(titulo);
    
    
    const desb = document.createElement("p");
    desb.setAttribute("id","desb");
    desb.textContent = restaurants[2].descrip;
    caja2.appendChild(desb);
    
    const direccion = document.createElement("p");
    direccion.setAttribute("id","direccion");
   
    direccion.textContent = restaurants[2].direccion;
    caja2.appendChild(direccion);


    const ciudad = document.createElement("p");
    ciudad.setAttribute("id","ciudad");
 
   
    ciudad.textContent = restaurants[2].ciudad;
    caja2.appendChild(ciudad); 
    
    
    verdadero = true;

};

if(restaurants[3].nombre==obtener && obtener!=obtener2){
    const conjunto = document.getElementById('conjunto');
    const caja = document.createElement("div");
    caja.setAttribute("id","cajaPL");
    
    caja.setAttribute("class","galeria");
    
    caja.setAttribute("style"," margin-top: 7rem");
    conjunto.appendChild(caja);
    
    
    const cajaimg = document.createElement("div");
    cajaimg.setAttribute("id","cajaimg");
    
    cajaimg.setAttribute("class","galeria");
    
    caja.appendChild(cajaimg);
    
    
    const imagen = document.createElement("img");
    imagen.setAttribute("id", "imagenPL");
    imagen.setAttribute("src", "./img/MEXICANA.jpg");
    
    cajaimg.appendChild(imagen);
    
    
    const caja2 = document.createElement("div");
    caja2.setAttribute("id", "caja2");
    caja2.setAttribute("class","pie");
    
    caja.appendChild(caja2);
    
    
    const titulo = document.createElement("p");
    titulo.setAttribute("id","titulo");
    
    titulo.textContent = restaurants[3].nombre;
    caja2.appendChild(titulo);
    
    
    const desb = document.createElement("p");
    desb.setAttribute("id","desb");
    desb.textContent = restaurants[3].descrip;
    caja2.appendChild(desb);
    
    const direccion = document.createElement("p");
    direccion.setAttribute("id","direccion");
   
    direccion.textContent = restaurants[3].direccion;
    caja2.appendChild(direccion);


    const ciudad = document.createElement("p");
    ciudad.setAttribute("id","ciudad");
 
   
    ciudad.textContent = restaurants[3].ciudad;
    caja2.appendChild(ciudad); 
    
    
    verdadero = true;

};

 obtener2=obtener;


};