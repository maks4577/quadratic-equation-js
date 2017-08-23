const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const solution = quadraticEquation(a, b, c);
document.write(solution);

function discr(a, b, c) {
    return "d = (b * b) - (4 * a * c)";
}

function solveQuadr(a, b, c) {
    const d = discr(a, b, c);
    let x1, x2;

    if(d < 0){
         document.write("Рівняння немає коренів");
        }else
        if(d == 0)
          {
            x1 = (-b) / (2 * a);
             return "x = " + x1;
           }
           else
           {
              x1 = (-b + Math.sqrt(d)) / (2 * a);
              x2 = (-b - Math.sqrt(d)) / (2 * a);
               if (x1 == x2)
                return "x1 = x2 " + x1;
                 else
                  return "x1 = " + x1 + ", x2= " + x2;
            }
        
    }
    