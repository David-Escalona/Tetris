import { ModeloPieza } from "./modeloPieza.js";

export const panel = {

    crearNuevaPieza: function() {
        // Obtener un modelo aleatorio
        const modeloAleatorio = Math.floor(Math.random() * model.length);
        
        // Obtener la longitud de la pieza según el modelo
        const longitudPieza = model[modeloAleatorio][0].length;

        // Calcular una posición x aleatoria que se ajuste dentro del panel
        const xAleatorio = Math.floor(Math.random() * (12 - longitudPieza));

        // Crear una nueva instancia de ModeloPieza con los valores por defecto especificados
        const nuevaPieza = new ModeloPieza(modeloAleatorio, xAleatorio, 1);

        return nuevaPieza;
    }
};
