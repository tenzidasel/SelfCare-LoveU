import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { EmotionalComponent } from './components/pages/emotional/emotional.component';
import { PhysicalComponent } from './components/pages/physical/physical.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmotionalComponent,
    PhysicalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
