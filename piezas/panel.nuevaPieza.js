import { ModeloPieza } from "./modeloPieza.js";

export const panel = {
    nuevaPieza: null, // Inicializamos la propiedad nuevaPieza como null

    // Otros métodos y propiedades...

    insertarPieza: function() {
        if (this.nuevaPieza instanceof ModeloPieza) {
            // Copiar los elementos de la nueva pieza al panel
            for (let y = 0; y < this.nuevaPieza.altura; y++) {
                for (let x = 0; x < this.nuevaPieza.longitud; x++) {
                    // Comprobar si la posición está dentro del panel
                    if (this.nuevaPieza.y + y >= 0 && this.nuevaPieza.y + y < this.matriz.length &&
                        this.nuevaPieza.x + x >= 0 && this.nuevaPieza.x + x < this.matriz[0].length) {
                        // Copiar el valor de la pieza en la posición correspondiente del panel
                        this.matriz[this.nuevaPieza.y + y][this.nuevaPieza.x + x] = this.nuevaPieza.matriz[y][x];
                    }
                }
            }
        }
    }
};