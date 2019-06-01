import { TestBed, async, inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl} from '@angular/forms';

describe("Teste de autenticação", function()
{
  let myService: AuthService;
  loginForm : FormGroup;

 this.loginForm = new FormGroup({
    username: new FormControl('admin'),
    password: new FormControl('ASDqwe@2O18')
  });
  
  it("", function(){
    expect(myService.login).toHaveBeenCalled();
  })

  it("Deve retornar um token", function(){

    expect(myService.login(this.loginForm.value)).toEqual(jasmine.objectContaining({
      token: jasmine.any(String)
    })
    );
  });

});
