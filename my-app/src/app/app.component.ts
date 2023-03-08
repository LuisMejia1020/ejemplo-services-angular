import { Component } from '@angular/core';
import { INotificacion } from './interfaces/INotificacion';
import { IMensaje } from './interfaces/mensaje';
import { mensajeInformacion, mensajeAdvertencia, mensajeError } from './mensajesNotificaciones';
import { NotificacionesService } from './notificaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  mensajeInformacion = mensajeInformacion
  mensajeAdvertencia = mensajeAdvertencia
  mensajeError = mensajeError

  // paso1: para inyectar el servicio se debe agregar el constructor
  constructor(public servicioNotificaciones: NotificacionesService){}
//con esta informacion se crea una nueva notificacion 
// se agregan notitficiacion al servicio
 crearNuevaNotificacion(titulo:string, mensaje:string, tipoNotificacion:"error" | "advertencia" | "informacion"){
  const nuevaNotificacion: INotificacion = {
    titulo: titulo,
    mensaje: mensaje,
    tipoNotificacion: tipoNotificacion,
    horaFecha: new Date
  }
  this.servicioNotificaciones.Notificar(nuevaNotificacion)
 }

  limpiarMensajes(){
    this.servicioNotificaciones.limpiarNotificacion()
  }

}
