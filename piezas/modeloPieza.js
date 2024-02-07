export class ModeloPieza { // Exporto una clase llamada ModeloPieza
    constructor(modelo, x = 0, y = 0) { // Que incliye un constructor un el valor modelo, x inicializado en 0, y inicializado en 0
        this.modelo = modelo; // Este modelo sera igual a modelo
        this.angulo = 0; // Este angulo tendra un valor de 0
        this.matriz = this.obtenerMatriz(); // Obtener la matriz según el modelo y el ángulo
        this.x = x; // La x tendr el valor x que es 0
        this.y = y; // La y tendra el valor y que es 0
        this.longitud = this.matriz[0].length; // Longitud de la fila de la matriz
        this.altura = this.matriz.length; // Altura de la matriz
    }

    obtenerMatriz() {
        const modeloActual = tetrisModels[this.modelo]; // Creo una variable constante llamada modeloActual que recibe
        return modeloActual[this.angulo % 4]; // El modeloActual me devuelve 4 posiciones de ángulo (0, 1, 2, 3)
    }

    girar() { 
        this.angulo = (this.angulo + 1) % 4; // Actualizo la matriz según el nuevo ángulo
        this.matriz = this.obtenerMatriz(); // Actualizo la longitud y la altura de la pieza
        this.longitud = this.matriz[0].length;
        this.altura = this.matriz.length;
    }
}

