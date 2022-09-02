
function operators(invar) {
    const op = invar;

    switch (op) {
        case "0":
            console.log("btn 0");
            var cl = document.getElementById("display");
            cl.value = cl.value + "0";
            break;
        case "1":
            console.log("btn 1");
            var cl = document.getElementById("display");
            cl.value = cl.value + "1";
            break;
        case "2":
            console.log("btn 2");
            var cl = document.getElementById("display");
            cl.value = cl.value + "2";
            break;
        case "3":
            console.log("btn 3");
            var cl = document.getElementById("display");
            cl.value = cl.value + "3";
            break;
        case "4":
            console.log("btn 4");
            var cl = document.getElementById("display");
            cl.value = cl.value + "4";
            break;
        case "5":
            console.log("btn 5");
            var cl = document.getElementById("display");
            cl.value = cl.value + "5";
            break;
        case "6":
            console.log("btn 6");
            var cl = document.getElementById("display");
            cl.value = cl.value + "6";
            break;
        case "7":
            console.log("btn 7");
            var cl = document.getElementById("display");
            cl.value = cl.value + "7";
            break;
        case "8":
            console.log("btn 8");
            var cl = document.getElementById("display");
            cl.value = cl.value + "8";
            break;
        case "9":
            console.log("btn 9");
            var cl = document.getElementById("display");
            cl.value = cl.value + "9";
            break;
        case "C":
            console.log("btn C");
            //instruccion que resetea a cero el display
            var cl = document.getElementById("display");
            cl.value = "";
            break;
        case "CE":
            console.log("btn CE");
            //instruccion que borra solo el ultimo número introducido en el display
            var cl = document.getElementById("display");
            cl.value = cl.value.slice(0, -1);
            break;
        case "+":
            console.log("btn suma");
            var cl = document.getElementById("display");
            cl.value = cl.value + "+";
            break;
        case "-":
            console.log("btn rest");
            var cl = document.getElementById("display");
            cl.value = cl.value + "-";
            break;
        case "*":
            console.log("btn mult");
            var cl = document.getElementById("display");
            cl.value = cl.value + "*";
            break;
        case "/":
            console.log("btn divi");
            var cl = document.getElementById("display");
            cl.value = cl.value + "/";
            break;
        case "%":
            console.log("btn %");
            var cl = document.getElementById("display");
            cl.value = cl.value + "%";
            break;
        case "1/X":
            console.log("btn 1/X");
            var cl = document.getElementById("display");
            cl.value = 1 / cl.value;
            break;
        case "raiz":
            console.log("btn raiz");
            var cl = document.getElementById("display");
            cl.value = Math.sqrt(cl.value);
            break;
        default:
            //console.log("btn igua");
            var cl = document.getElementById("display");
            var chain = cl.value;
            var symbol;
            for (var i = 0; i < chain.length; i++) {
                var opera = chain.charAt(i);

                if (opera == "+") {
                    console.log("es un +");
                    symbol = opera;
                } else if (opera === "-") {
                    console.log("es un -");
                    symbol = opera;
                } else if (opera === "*") {
                    console.log("es un *");
                    symbol = opera;
                } else if (opera === "/") {
                    console.log("es un /");
                    symbol = opera;
                } else if (opera === "%") {
                    console.log("es un %");
                    symbol = opera;
                }
            }
            console.log(symbol);
            operations(symbol);
            break;
    }
}

function operations(invar) {
    const op = invar;

    switch (op) {
        case "+":
            console.log("btn suma");
            var cl = document.getElementById("display");
            var oper = cl.value.split(op);
            cl.value = (parseFloat(oper[0]) + parseFloat(oper[1]));
            break;
        case "-":
            console.log("btn rest");
            var cl = document.getElementById("display");
            var oper = cl.value.split(op);
            cl.value = (parseFloat(oper[0]) - parseFloat(oper[1]));
            break;
        case "*":
            console.log("btn mult");
            var cl = document.getElementById("display");
            var oper = cl.value.split(op);
            cl.value = (parseFloat(oper[0]) * parseFloat(oper[1]));
            break;
        case "/":
            console.log("btn divi");
            var cl = document.getElementById("display");
            var oper = cl.value.split(op);
            cl.value = (parseFloat(oper[0]) / parseFloat(oper[1]));
            break;
        case "%":
            console.log("btn %");
            console.log("btn perc");
            var cl = document.getElementById("display");
            var oper = cl.value.split(op);
            cl.value = ((parseFloat(oper[0]) / 100) * parseFloat(oper[1]));
            break;
        default:
            console.log("default");
            break;
    }
}

