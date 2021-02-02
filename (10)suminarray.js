function contar(arrayC){
    for(var count = 0; count < arrayC.length; count++){
    sum += arrayC[count]
    }
    return sum
}
var sum = 0
var arrayC = [1, 2, 3, 4]
var retorno = contar(arrayC);
console.log(sum) //My solution


function sumArray(tamanhoArray) //Here we created a function called sumArray(we will receive this parameter)
{
    var sum = 0;//here we just attribute a value to this variable
    
    for(var contador = 0; contador < tamanhoArray.length; contador++)//Here the var "contador" serve as count, start with 0 and we set the  "tamanhoArray" as parameter from this function and while contador < "tamanhoArray.lenght" that was set in the var "tamanhoArray" "contador" will receive +1
    {
        sum += tamanhoArray[contador];// Here we sum the value from the array position, basically sum receive the value from actual position and sum with himself
    }
    
    return sum; //Here we will return the sum variable, to stay avaible
}

var tamanhoArray = [2, 3, -1, 5, 7, 9, 10, 15, 95];//This is the array, already pre defined
var sum = sumArray(tamanhoArray);// Here we will just atrribute the function sumArray resulto to sum
console.log(sum);// Here we will print the result