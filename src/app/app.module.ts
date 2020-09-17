import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

// Import PrimeNG modules

import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChipsModule,
    ButtonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
