


let input1 = document.getElementById("valor")
input1.onkeyup = () => {("keyUp")};


let Cotizar = 
document.getElementById("cotizador")
Cotizar.onclick = () => ("click")
Cotizar.onmouseover = () => {console.log("--------------------")};
Cotizar.addEventListener("click", convertir)

const divisas = [
fetch("https://api.exchangerate.host/convert?from=USD&to=ARS")
.then(response => response.json())
.then(data =>

    dolar = (data.result)),

fetch("https://api.exchangerate.host/convert?from=EUR&to=ARS")
.then(response => response.json())
.then(data =>
    euro = (data.result)),

fetch("https://api.exchangerate.host/convert?from=BRL&to=ARS")
.then(response => response.json())
.then(data =>
    real =(data.result))

]

function convertir() {
   

    let valore = parseInt(document.getElementById("valor").value);
    console.log("el monto ingresado fue de : " , valore);
    let resultado = 0;
    


    if (document.getElementById("uno").checked){
        resultado = valore / dolar 
        
        
        cambio = "dolar";
    
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:(`El cambio de pesos Argentinos a Dolares es: $ ${resultado.toFixed(2)}`),
            showConfirmButton: false,
            timer: 1500
          });


       

        console.log("El cambio de pesos Argentinos a Dolares es: $",  resultado.toFixed(2));

      
        console.log([...divisas , {"cambio" : "dolar" , "valor ingresado" : valore , "resultado" : resultado , "cotizacion" : dolar} ]);

        
        

    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro;
        cambio = "euro";
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `El cambio de pesos Argentinos a Euros es: $ ${resultado.toFixed(2)}`,
            showConfirmButton: false,
            timer: 1500
          });

        
        console.log("El cambio de pesos Argentinos a Euros es: $",  resultado.toFixed(2));


       console.log([...divisas , {"cambio" : "euro" , "valor ingresado" : valore , "resultado" : resultado , "cotizacion" : euro} ]);

    }
    else if (document.getElementById("tres").checked){
        resultado = valore /real;
        cambio = "real";

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title:`El cambio de pesos Argentinos a Reales es: $ ${resultado.toFixed(2)}`,
            showConfirmButton: false,
            timer: 1500
          });

        
        console.log("El cambio de pesos Argentinos a Reales es: $", resultado.toFixed(2));
      console.log( [...divisas , {"cambio" : "real" , "valor ingresado" : valore , "resultado" : resultado , "cotizacion" : real} ]);
        

    }
    else{

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Tienes que completar todos los requerimientos',
            footer: '<a href="">Why do I have this issue?</a>',
          })
        
    }  
  


    let resultadoxi = JSON.stringify (resultado);

   divisas.push(resultadoxi);

    localStorage.setItem("resultados" , resultado);
    
    resultadoxi = JSON.stringify(resultado);
  
   

    console.log(divisas);
    return ;

}


function devuelta(){
    let resultadoxi = JSON.stringify(localStorage.getItem('resultados'));

    document.getElementById('ultcambios').innerHTML = " resultado anterior " + resultadoxi;

}

