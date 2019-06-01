/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { LoginComponent } from './login.component';

describe("Teste de Login", function() {
  let mockLogin : LoginComponent;
  mockLogin.loginForm = new FormGroup({
    username: new FormControl('admin'),
    password: new FormControl('ASDqwe@2O18')
  });

  it("deve efetuar login", function() {
  });
});

