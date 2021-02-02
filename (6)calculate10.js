num = 1
sum = 1
while (num <= 10){
    sum = num * sum
    num++
} 
console.log(sum)// My solution

//////////////////////////////////////////////////////////////////

var prod = 1;

for(var i = 1; i <= 10; i++){
    prod *= i;
}

console.log(prod);//Suggested solution
//In this exercise I could have used (+= on sum) that will leave the code cleaner (Same from the previous exercise)

