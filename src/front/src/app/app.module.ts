import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { SharedModule } from './shared/shared.module';
import { LoginformComponent } from './components/loginform/loginform.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
