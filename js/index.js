function print(value){
    document.write(value);
    document.write("<br>");
}
const a = parseFloat(prompt("Enter a") );
const b = parseFloat(prompt("Enter b") );
const c = parseFloat(prompt("Enter c") );

const solution = solveQuader(a, b, c);
print(solution);

function solveQuader(a, b, c){
   const d = discr();
   function discr(a, b, c){
    return Math.pow(b, 2) - 4 * (a * c);
    }
    let x1, x2;
   
    if(d === 0){
        return x1, x2 = -b / (2 * a);
    }else if(d > 0){
        return x1 = ( Math.pow(b, 2) + Math.sqrt(d) ) / (2 * a); 
        return x2 = ( Math.pow(b, 2) - Math.sqrt(d) ) / (2 * a);
    }else{
        return x1, x2 = "No answer";
    }
    return "x1= " + x1 + ", x2 = " + x2;
}