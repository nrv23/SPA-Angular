import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { APP_ROUTING } from "./app.routes";

//servicios
import { HeroesService } from "./services/heroes.service";

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

@NgModule({
  declarations: [ // en los declarations se declaran los componentes para que
    // se puedan usar en toda la aplicacion
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING // todos los exports de los modulos se declaran en los imports
  ],
  providers: [HeroesService], // en los providers se importan
  // todos los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
