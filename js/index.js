const a = parseFloat(prompt('Enter A digit'));
const b = parseFloat(prompt('Enter B digit'));
const c = parseFloat(prompt('Enter C digit'));

const solution = quadraticEquation(a, b, c);
document.write(solution);

function discriminant (a, b, c){
    return Math.pow(b, 2) - 4 * (a * c);
}

function quadraticEquation (a, b, c){
    if (a === 0) {
        return  -c / b;
    }  
    const d = discriminant(a, b, c);
    if (d > 0) {
        return [ (-b + Math.sqrt(d)) / (2 * a),
                 (-b - Math.sqrt(d)) / (2 * a) ];
    } else if (d === 0) {
        return (-b - Math.sqrt(d)) / (2 * a);
    }
        return "There is no equation of real roots.";
} 