import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { RootComponent } from './layouts/root/root.component';
import { HomeComponent } from './layouts/home/home.component';
import { ServiciosComponent } from './layouts/servicios/servicios.component';
import { InstalacionesComponent } from './layouts/instalaciones/instalaciones.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    RootComponent,
    HomeComponent,
    ServiciosComponent,
    InstalacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
