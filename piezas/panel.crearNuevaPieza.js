import { ModeloPieza } from "./modeloPieza.js"; // Importo el archivo ModeloPieza

export const panel = { // Exporto una variable constatnte llamada panel

    crearNuevaPieza: function() { 
        
        const modeloAleatorio = Math.floor(Math.random() * model.length); // Creo una variable constante llamada modeloAleatorio que recibe un numero alatorio
        
        
        const longitudPieza = model[modeloAleatorio][0].length; // Obtener la longitud de la pieza según el modelo

        // Calcular una posición x aleatoria que se ajuste dentro del panel
        const xAleatorio = Math.floor(Math.random() * (12 - longitudPieza));

        // Crear una nueva instancia de ModeloPieza con los valores por defecto especificados
        const nuevaPieza = new ModeloPieza(modeloAleatorio, xAleatorio, 1);

        return nuevaPieza;
    }
};

