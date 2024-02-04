let model = [] // Creo el array model

const pieza_I = [
        [1,1,1,1] // Defino el diseño de las piezas
] 

const pieza_Q = [
        [1,1], // Defino el diseño de las piezas
        [1,1]  // Defino el diseño de las piezas
] 

const pieza_T = [
        [1,1,1], // Defino el diseño de las piezas
        [0,1,0]  // Defino el diseño de las piezas
] 

const pieza_L = [
        [0,0,1], // Defino el diseño de las piezas
        [1,1,1]  // Defino el diseño de las piezas
] 

const pieza_Z = [
        [1,1,0], // Defino el diseño de las piezas
        [0,1,1]  // Defino el diseño de las piezas
] 

const pieza_LL = [
        [1,0,0], // Defino el diseño de las piezas
        [1,1,1]  // Defino el diseño de las piezas
] 

model.push(pieza_I) // Añado el diseño de piezas dentro del array model
model.push(pieza_Q) // Añado el diseño de piezas dentro del array model
model.push(pieza_T) // Añado el diseño de piezas dentro del array model
model.push(pieza_L) // Añado el diseño de piezas dentro del array model
model.push(pieza_Z) // Añado el diseño de piezas dentro del array model
model.push(pieza_LL) // Añado el diseño de piezas dentro del array model

function rotar(pieza){ // Creo una funcion llamada rotar que recibe el valor pieza

        let i; // Creo una variable llamada i
        let rotacion = [pieza]; // Creo una variable llamada rotacion que recibe el array de pieza

        for(i=0;i<3;i++){ // Inicio un bucle que se incializa en 0 y se ejecutara tres veces y por cada interaccion la i se incrementa 
                pieza = pieza[0].map((_, index) => pieza.map(row => row[index])).reverse(); // La pieza se inicializa en la primera fila mediante pieza[0]
                // El .map((_, index)) me permite repetir los elementos de la primera fila y utilizo _ como marcador para el valor actual 
                // El => pieza.map(row => row[index]) hace que el .map recorra las filas de pieza, y hara que cree una nueva 
                // Y por ultimo el .reverse() hace que se invierta el orden de las filas
                rotacion.push(pieza.map(row => [...row]));
        }
        return rotacion // Devuelve el valor rotacion
}

        for(i=0;i<model.length;i++){ // Inicio un bucle que se ejecutara desde 0 hasta cada fila del model
                model[i] = rotar(model[i]); // Se reemplaza la pieza 
        }
    
    console.log(model); // Saca por consola el array model

