import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SweetAlertService } from '../services/sweetAlert.service';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  forgotPasswordMode = false;

  constructor(private authService: AuthService, private router: Router,
              private sweetAlertService: SweetAlertService, private alertifyService: AlertifyService ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(next => {
      this.alertifyService.success('Bem vindo!');
      this.router.navigate(['home']);
    }, error => {
      this.sweetAlertService.error('Falha ao logar!', 'Confira seu usuário e senha e tente novamente');
    });
  }

  forgotPasswordToggle() {
    this.forgotPasswordMode = true;
  }
  cancelForgotMode(forgotPasswordMode: boolean) {
    this.forgotPasswordMode = forgotPasswordMode;
  }

}
