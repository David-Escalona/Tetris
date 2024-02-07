export class ModeloPieza {
    constructor(modelo, x = 0, y = 0) {
        this.modelo = modelo;
        this.angulo = 0; // Por defecto el ángulo es 0
        this.matriz = this.obtenerMatriz(); // Obtener la matriz según el modelo y el ángulo
        this.x = x;
        this.y = y;
        this.longitud = this.matriz[0].length; // Longitud de la fila de la matriz
        this.altura = this.matriz.length; // Altura de la matriz
    }

    obtenerMatriz() {
        // Obtener la matriz según el modelo y el ángulo
        const modeloActual = tetrisModels[this.modelo];
        return modeloActual[this.angulo % 4]; // 4 posiciones de ángulo (0, 1, 2, 3)
    }

    girar() {
        // Incrementar el ángulo (de 0 a 3)
        this.angulo = (this.angulo + 1) % 4;
        // Actualizar la matriz según el nuevo ángulo
        this.matriz = this.obtenerMatriz();
        // Actualizar la longitud y la altura de la pieza
        this.longitud = this.matriz[0].length;
        this.altura = this.matriz.length;
    }
}

