import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService, Heroe } from "../../services/heroes.service";

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


 heroes: Heroe[] = [];
 termino: string;
  constructor(
  	private activtedRoute: ActivatedRoute,
  	private heroesService: HeroesService
  	) { 

  }

  ngOnInit(): void {
  	this.activtedRoute.params.subscribe(params => {

  		this.termino = params["termino"];
  		this.heroes = this.heroesService.buscarHeroe(this.termino);
  	})
  }

}
