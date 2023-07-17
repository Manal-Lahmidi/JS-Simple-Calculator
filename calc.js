// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    
    // Verify if the expression contains "sin", "cos" or "tan"
    if (p.includes("sin")) {
        var angle = parseFloat(p.substring(3));
        var result = Math.sin(angle * (Math.PI / 180)); // Convertir l'angle en radians
        document.getElementById("result").value = result.toFixed(4); // Afficher le résultat avec 4 décimales
    } else if (p.includes("cos")) {
        var angle = parseFloat(p.substring(3));
        var result = Math.cos(angle * (Math.PI / 180));
        document.getElementById("result").value = result.toFixed(4);
    } else if (p.includes("tan")) {
        var angle = parseFloat(p.substring(3));
        var result = Math.tan(angle * (Math.PI / 180));
        document.getElementById("result").value = result.toFixed(4);
    } else {
        // evaluate the expression for the other operations 
        var result = eval(p);
        document.getElementById("result").value = result;
    }
}

// this fonction delete an element every time we click "DEL"
function deleteLastCharacter() {
    var expression = document.getElementById("result").value;
    var newExpression = expression.slice(0, -1); // Supprimer le dernier caractère de l'expression
    document.getElementById("result").value = newExpression;
}

