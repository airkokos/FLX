let a = parseFloat(prompt('Enter value of a'));
let b = parseFloat(prompt('Enter value of b'));
let c = parseFloat(prompt('Enter value of c'));
let discriminant = Math.pow(b,2) -(4*a*c);
let value1 = ((-b + Math.sqrt(discriminant)) / (2*a)).toFixed(2);
let value2 = ((-b - Math.sqrt(discriminant)) / (2*a)).toFixed(2);
        if (!a || Number.isNaN(b) || Number.isNaN(c)) {
            alert('Invalid input data')
        } else if (discriminant === 0) {
            alert('x='+ value1);
        } else {
            alert(discriminant < 0 ? 'No solution' : 'x1='+ value1, 
                                                    '\nx2='+ value2 );
        }


