// console.log ("agostina")

// calcular nota final de alumnos ingresados

 

// function promedio() {
//     let alumno = prompt("ingrese nombre")

//     let primeraNota = Number (prompt("Ingrese nota 1"))
//     let segundaNota = Number (prompt("Ingrese nota 2"))
//     let terceraNota = Number (prompt("Ingrese nota 3"))

//     let promedioFinal = (primeraNota + segundaNota + terceraNota) / 3

//     return alert (alumno + ":" + "tu promedio final es " + promedioFinal)
// }

// console.log(promedio())



const promedio = () =>  {
    let alumno = prompt("ingrese nombre")

    let primeraNota = Number (prompt("Ingrese nota 1"))
    let segundaNota = Number (prompt("Ingrese nota 2"))
    let terceraNota = Number (prompt("Ingrese nota 3"))

    let promedioFinal = (primeraNota + segundaNota + terceraNota) / 3
    // return promedioFinal
    return alert (alumno + ":" + "tu promedio final es " + promedioFinal)
}

console.log(promedio())
console.log ("fin del programa")