import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public success(message: string, title?: any):void {
    this.showAlert(title, message, 'success')
  }

  public info(message: string, title?: any):void {
    this.showAlert(title, message, 'info')
  }

  public error(message: string, title?: any):void {
    this.showAlert(title, message, 'error')
  }

  private showAlert(
    title: string,
    message: string,
    icon: SweetAlertIcon
  ):void {
    Swal.fire(title, message, icon)
  }

  public showAlertYesNo(
    title: string,
    message: string,
    icon = 'warning',
    func: any
  ){
    Swal.fire({
        title: title,
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deletado!',
            'Item deletado com sucesso.',
            'success'
          )
        }
      })
  }
}
