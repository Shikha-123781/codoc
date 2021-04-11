import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { HttpClientModule } from '@angular/common/http';
import { RequiredServiceService } from './required-service.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RequiredServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
