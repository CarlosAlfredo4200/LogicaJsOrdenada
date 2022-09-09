const cars = {BMW:3,Tesla:2,ToyoTa:1}

Object.keys(cars).forEach(function(keys){
    console.log('Key: ' + keys + ' Value: ' + cars[keys]);
})

//Nueva version
console.log('');

for(let [key,value] of Object.entries(cars)){
    console.log(`key: ${key} value: ${value}`);

}