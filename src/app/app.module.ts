import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationPipe } from './validation.pipe';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ValidationPipe],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
