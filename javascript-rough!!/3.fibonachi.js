function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    //Write your code here:
    var output = [];
    if (n == 0) {
        output.push(0);
        return output;
    }
    else if (n == 1) {
        output.push(0);
        output.push(1);
        return output;
    }
    else if (n > 1) {
        output.push(0);   
        output.push(1);
        var pop;
        for (var i = 0; i < n-1; i++) {
             pop= output[i] + output[i + 1];
             output.push(pop);
        }
        console.log("run!!")
        return output;
        

    }

    //Return an array of fibonacci numbers starting from 0.

    //Do NOT change any of the code below 👇
}
var outputfinal = fibonacciGenerator(5);
console.log(outputfinal)
