import { Injectable } from '@angular/core';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

constructor() { }


  error(title: string, text: string) {
  swal({
      title: title,
      text: text,
      type: 'error',
      showConfirmButton: false
    });
  }

  success(title: string, text: string) {
    swal({
        title: title,
        text: text,
        type: 'success',
        showConfirmButton: false
      });
    }

  warning(title: string, text: string) {
    swal({
        title: title,
        text: text,
        type: 'warning',
        showConfirmButton: false
      });
    }

    info(title: string, text: string) {
      swal({
          title: title,
          text: text,
          type: 'info',
          showConfirmButton: false
        });
      }
      html(title: string, html: string) {

        swal({
          title: title,
          html: html,
          showConfirmButton: true
        });
      }

}
