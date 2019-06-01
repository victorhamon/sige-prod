import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgotPassword.component.html',
  styleUrls: ['./forgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  @Output() cancelForgot = new EventEmitter();

  forgotForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.forgotForm = new FormGroup({
      username: new FormControl('', Validators.required)
    });
  }
  cancel() {
    this.cancelForgot.emit(false);
  }
  sendRecovery() {
  }

}
