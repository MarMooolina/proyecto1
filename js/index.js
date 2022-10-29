/**
 * REVERSE()
 * reverse es solo aplicable a un array
 * array.reverse() los invierte
 * [12,46,89,90].reverse()
 * resultado = [90, 89, 46, 12 ]
 * 
 * 
 * 
 * SORT()
 * Ayuda a ordenar en un arreglo
 * Modifica el arreglo original
 */

function perro (){
    try {
        return 0 + count
    } catch (error){
    console.error(error)
    alert(error)
    } finally {
        console.log("final");
    }
}

//Regresa. 1, 10, 2 ya que se sigue con el 1
const num = [2, 1, 10];
//num.sort();
num.sort ((a, b) => b - a); // lo acomoda de mayo a menor
//num.sort ((a, b) => a - b); // lo acomoda de menor a mayor

//Cuando no lleva curlys, el return va implicito
//a - b = numero negativo (a se orgena antes que b)
//a - b = numero positivo (b se ordena antes que a)
//a - b = 0 (se quedan en la misma posicion)

console.log("sort 1", num);

function compare (a, b){
    if(a < b) return -1
    if(a > b) return 1
    if (a == b) return 0
} // de manor a mayor
//Solo es aplicable para numeros y para 

/**
 * function compare (a, b){
    if(a < b) return 1
    if(a > b) return -1
    if (a == b) return 0
} // de mayor a menor
 * 
 */

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
console.log(typeof compare);
numbers.sort(compare)
//numbers.sort((a, b) => {})

console.log("sort 2:", numbers);
//cuando pones un callbackk va sin parentésis


//Letters

const letters = ["ä","e", "c"];

function compareLetters (a, b){
    return a.localeCompare(b);
}

letters.sort(compareLetters)
console.log("letter1:", letters);

const words = ['Hello', '$Dollar', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];

function compareWords(a, b){
    if (a < b) return 1;
    if(a > b) return -1;
    if (a === b) return 0;
} //Forma descendente

words.sort(compareLetters)
//Este es el mero wueno

//words.sort()
console.log("words1", words);

//

const student = [
    {name:"Dylan",age:29},
    {name:"Jesús",age:21},
    {name:"Cristian", age:36},
    {name: "Jose", age: 30},
    {name:"Diego", age: 22},
    {name:'David', age:27},
    {name:"Mar", age: 25},
    {name: "alfredo", age: 34},
    {name: "Kain", age:39},
    {name: "Oscar", age:39},
    {name: "Karla", age:18},
    {name: "Alexa", age:22}
    ]

    function compareStudents(a, b){
        return a.name.localeCompare(b.name)
    }

    student.sort(compareStudents)
    console.log("student", student);

    //Ordenar por edad, en una línea
    const prueba = [student.sort((a, b) => a.age - b.age)];
    console.log(prueba);

    //3 funciones en el bonus