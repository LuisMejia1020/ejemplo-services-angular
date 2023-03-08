import { Component } from '@angular/core';
import { INotificacion } from '../interfaces/INotificacion';
import { NotificacionesService } from '../notificaciones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public servicioNotificacion: NotificacionesService){

  }


  notificar(){
    const nuevaNotificacion: INotificacion = {
      titulo: 'usuario ingreso exitosamente al sistema',
      mensaje: 'usuario autenticado, bienvenido',
      tipoNotificacion: 'informacion',
      horaFecha: new Date
    }
    this.servicioNotificacion.Notificar(nuevaNotificacion)
  }

}
