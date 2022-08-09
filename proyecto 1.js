//var perro = {nombre: "olaf", edad: 18, vivo: true};


//console.log(perro);

/*function Perro (nombre, edad, vivo) {
    this.nombre = nombre; 
    this.edad = edad;
    this.vivo= vivo;

};

var perro1 = new Perro("tobby", 5, true);
console.log(perro1);

var perro2 = new Perro("Deisy", 6, false);
console.log(perro2);

var animal = [perro1, perro2];
console.log(animal);*/

//var keysAndValues = ({a: 1, b: 2, c: 3})
//console.log(keysAndValues);


//creación de constructor
function KeysAndValues (key1, key3, key2){
    this.key1 = key1;
    this.key3 = key3;
    this.key2 = key2;
}


//instancia
var objeto = new KeysAndValues(10, 2, 6)


//muestro lo que contiene el objeto
console.log(objeto);


//creacion del metodo separador
function separador (KeysAndValues){
    let llaves = (Object.keys(KeysAndValues).sort());
    let valores = Object.values(KeysAndValues);
    let matriz = [llaves, valores];
    console.log(matriz);
}


//llamada a la funcion separador
separador (objeto);