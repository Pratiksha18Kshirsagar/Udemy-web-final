function add(num1 , num2){
    return num1 + num2;
}
function sub(num1 , num2){
    return num1 - num2;
}
function div(num1 , num2){
    return num1 / num2;
}
function mul(num1 , num2){
    return num1 * num2;
}
function expo(num1 , num2){
    return num1 ** num2;
}
function calculator(num1 , num2 , func){
    return func(num1,num2);
}

console.log(calculator(10,5,sub));
console.log(calculator(2,3,add));
console.log(calculator(20,4,div));
console.log(calculator(2,3,mul));
console.log(calculator(2,3,expo));