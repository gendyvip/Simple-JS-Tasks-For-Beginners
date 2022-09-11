//Write a JavaScript program that accept two integers and display the larger
function compareNumbers(num1, num2) {
    num1 = Number(prompt("Enter first number:-"));
    num2 = Number(prompt("Enter second number:-"));
    if (num1 > num2)
        alert("The larger is: " + num1);
    else
        alert("The larger is: " + num2);
}
//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function sumNumbers(num1, num2) {
    var sum = 0;
    num1 = Number(prompt("Enter first integer number:-"));
    num2 = Number(prompt("Enter second integer number:-"));
    if (num1 === num2) 
    {
        sum = 3 * (num1 + num2);
        alert("Sum of two integers is: " + sum);
    }
    else
    {
        sum = num1 + num2;
    alert("Sum of two integers is: " + sum);
}
}
//Write a JavaScript program that accept name and  number form the user then show this message in your page  “ Hello {name}”
function iterateName(name, num) {
    var htmlCode="";
    name = String(prompt("Enter name:-"));
    num = Number(prompt("Enter an iteration number:-"));
    for(var i=1;i<=num;i++){
        htmlCode += "<li>"+"Hello "+name+"</li>"
    }
    document.getElementById("ul").innerHTML=htmlCode;
}
//Write a JavaScript program that accept number form the user then Show alert with conent this number is odd or this number is even 
function everOrOdd(num) {
    num = Number(prompt("Enter a number:-"));
    (num%2)===0?alert(num+" is Even"):alert(num+" is Odd");
}
//compareNumbers();
//sumNumbers();
//iterateName();
//getElementById();