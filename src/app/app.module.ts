import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ColorPickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
