import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { SweetAlertService } from '../services/sweetAlert.service';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  changePasswordForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private sweetAlertService: SweetAlertService,
    private authService: AuthService) { }

  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      UserName: new FormControl(localStorage.getItem('userName')),
      CurrentPassword: new FormControl(null, Validators.required),
      Password: new FormControl(null, Validators.required),
      ConfirmPassword: new FormControl(null, Validators.required)
    });
  }

  changePassword() {
    this.authService.changePassword(this.changePasswordForm.value).subscribe(next => {
      this.sweetAlertService.success('Ok', 'Senha alterada com sucesso.');
    }, error => {
      this.sweetAlertService.error('Erro', 'A senha não foi alterada.');
    });
  }

}
