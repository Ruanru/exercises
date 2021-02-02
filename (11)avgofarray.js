function contar(arrayC){
    for(var count = 0; count < arrayC.length; count++){
    sum += arrayC[count]
    }
    return sum
}
var sum = 0
var arrayC = [1, 2, 3, 4]
var retorno = contar(arrayC);
console.log(sum/arrayC.length) // My suggestion

////////////////////////////////////////////////////////////////////////////////////

function averageArray(ar)
{
    var n = ar.length;
    var sum = 0;
    
    for(var i = 0; i < n; i++)
    {
        sum += ar[i];
    }
    
    return sum / n;
}

var ar = [1, 3, 9, 15, 90];
var avg = averageArray(ar);

println("Average: ", avg);// Exercise suggestion