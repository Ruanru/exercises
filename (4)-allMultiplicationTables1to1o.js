for(var table = 1; table <= 10; table++) //Isso aqui é o contatador da tabuada que será efetuada
{
    printTable(table); //Aqui ele atribui à função printTable(atribuição)
    console.log("");// Espaço entre próxima tabuada
}




function printTable(table) //Aqui recebemos o valor passado pela variável (table)
{
    for(var tableNumber = 1; tableNumber <= 10; tableNumber++) // Esse for será executado até 10, quando finalizar ele volta para o primeiro FOR
    {
        var row = table + " * " + tableNumber + " = " + (table * tableNumber);
        console.log(row);
    } //Toda vez que esse for chegar a 10, deve somar +1 na var A
}