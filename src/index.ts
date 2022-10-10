import "./styles.css";

let num: number = [] = [1, 3, 7]
//declar variable, nombre y tipo del array.
console.log(num)
//para recorrer un array usamos ciclo for.
//indice en 0, termina cuando no hay mas elemntos.
for (let i = 0; i < num.lenght; i++) {
  console.log(`en el ${i} se encuentra ${num}`);
}
