import { IMensaje } from "./interfaces/mensaje";

export const mensajeError: IMensaje = {
    tipo: "error",
    descripcion:"ocurrio un error en la aplicacion"
}

export const mensajeAdvertencia: IMensaje = {
  tipo: "advertencia",
  descripcion:"esta aplicacion esta funcionando con advertencia"
}

export const mensajeInformacion: IMensaje = {
  tipo: "informacion",
  descripcion:"esta aplicacion esta funcionando"
}