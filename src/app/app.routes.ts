import {RouterModule, Routes} from '@angular/router';
import { HomeComponent  } from './components/home/home.component';
import { AboutComponent  } from './components/about/about.component';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from './components/heroe/heroe.component';
import {BuscadorComponent} from './components/buscador/buscador.component'; 

const APP_ROUTES : Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent}, // pasar un parametro por la url e /heroe
  {path: 'buscar/:termino', component: BuscadorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'} // si la ruta no existe en el
  //arreglo de rutas redirecciona a home component
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
 // useHash: true eso me indica que voy a usar el simbolo #/ para las rutas de
 //angular
