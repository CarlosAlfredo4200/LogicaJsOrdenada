const array = ["a","b,","c", "d", "f", "c"];

const letra = "c"


for (const k in array) {
    
     if(array[k] === letra){

         console.log(k);
     }
    
}