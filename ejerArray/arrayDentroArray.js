// sumar los números;

const miArray = [1,[2,[3,4]],[5,6],7];

const sumarNumerosarray = (array) => {

  newArray = [];

    if(array.length < 0){
        return 0;
    }else{
        let count = 0;
        for (let index = 0; index < array.length; index++) {
            if(!Array.isArray(array[index])){
                 count = count + array[index];
            }
            else{
                 
              

                
            }
           
            
        }
        console.log( count);
        console.log( newArray);
        
    }
        
}

console.log( sumarNumerosarray(miArray));

