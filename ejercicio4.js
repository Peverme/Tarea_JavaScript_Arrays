let lista = [2,3,1,4,6];

function sumaLista(lista){
let ind, suma=0;
for(ind=0; ind < lista.length; ind++)
    {
    suma += lista[ind];
    }
    return console.log("La suma del los valores del array es: " +suma);
} 
sumaLista(lista);
