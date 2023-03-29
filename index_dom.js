
console.log("hola")




import hamburguerMenu from "./menu_hamburguer.js";





const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    hamburguerMenu(".panel-btn", ".panel")
})


const maquina = document.getElementById("maquinaEscribir")


const maquinaEscribir = (textos = [], tiempo = 200, etiqueta = "") => {
    let i = 0;
    let j = 0;
    let k = 0;
    let escribir = setInterval(() => {
      let texto = textos[k % textos.length];
      let arrayCaracteres = texto.split("");
      if (i === arrayCaracteres.length) {
        etiqueta.innerHTML = texto.substring(0, j);
        j--;
        if (j < 0) {
          i = 0;
          j = texto.length;
          k++;
        }
      } else {
        etiqueta.innerHTML += arrayCaracteres[i];
        i++;
      }
    }, tiempo);
  };
  
  
  
  
  maquinaEscribir( [ "SEGURIDAD","CALIDAD","EL MEJOR PRECIO"],150,maquina)