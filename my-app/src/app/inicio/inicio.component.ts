import { Component } from '@angular/core';
import { NotificacionesService } from '../notificaciones.service';
import { INotificacion } from '../interfaces/INotificacion';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(public servicioNotificacion: NotificacionesService){}

  notificar(){
    const nuevaNotificacion: INotificacion = {
      titulo: 'notificando al administrador',
      mensaje: 'algo paso en la aplicacion',
      tipoNotificacion: 'error',
      horaFecha: new Date
    }
    this.servicioNotificacion.Notificar(nuevaNotificacion)
  }

}
