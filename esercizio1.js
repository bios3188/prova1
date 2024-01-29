function stampa(arg) {
    console.log(arg)
}

function calcolatrice(num1, num2, op) {
    if (op == "più") {
        stampa(num1 + num2)
    } else if (op == "meno") {
        stampa(num1 - num2)
    } else if (op == "per") {
        stampa(num1 * num2)
    } else if (op == "diviso") {
        stampa(num1/num2)
    }
    else stampa("operazione non valida")
}

const a = 10
const b = 5

calcolatrice(a, b, "più")
calcolatrice(a, b, "meno")
calcolatrice(a, b, "per")
calcolatrice(a, b, "diviso")

