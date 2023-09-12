import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModel } from '@angular/forms';
import { AutoCompleteMatComponent } from './auto-complete-mat/auto-complete-mat.component';
import { SignaturePadComponent } from './signature-pad/signature-pad.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoCompleteMatComponent,
    SignaturePadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
