var celsius = 54
function convert(){
    fahrenheit = (celsius*9/5)+32
    console.log(fahrenheit)
}
convert() // My solution

//////////////////////////////////////////////////////////////////

function celsiusToFahrenheit(n){
    return n * 1.8 + 32;
}
var r = celsiusToFahrenheit(20);
console.log(r); // Suggested solution

// I don't know which one is better, but my one looks more clear, on the other hand the suggested one look more conventionally correctly