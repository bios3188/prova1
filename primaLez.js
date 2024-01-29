function stampa(arg) {
    console.log(arg)
}

function somma(p1, p2) {
    console.log(p1 + p2)
}

const valore1 = 5
const valore2 = 4

somma(valore1, valore2)

stampa(valore1)

const array = [1, 2, 3]
array[5] = 5

array.map((el)=>{stampa(el)})

const oggetto = {
    primo: 3,
    secondo: 4,
    terzo: "ciaociao"
}