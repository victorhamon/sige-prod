import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { AppRoutes } from './app.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContentComponent } from './content/content.component';
import { ForgotPasswordComponent } from './forgotPassword/forgotPassword.component';
import { AlertifyService } from './services/alertify.service';
import { SweetAlertService } from './services/sweetAlert.service';
import { GridModule, ExcelModule, PDFModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      HomeComponent,
      ContentComponent,
      ForgotPasswordComponent
   ],
   imports: [
      BrowserModule,
      AppRoutes,
      HttpClientModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      GridModule,
      FormsModule,
      ExcelModule,
      PDFModule,
      UiModule
   ],
   providers: [
      AuthService,
      AuthGuard,
      AlertifyService,
      SweetAlertService,
      { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
