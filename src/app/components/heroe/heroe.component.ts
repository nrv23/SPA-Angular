import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { HeroesService, Heroe } from "../../services/heroes.service";

interface response {
	id: number 
}

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  constructor(
  		private activatedRoute: ActivatedRoute,
  		private heroesService: HeroesService
  	) { 
  	this.activatedRoute.params.subscribe((params: response) => { // en el objeto params vienen los parametros 
  		// enviados por la url
  		this.heroe = this.heroesService.getHeroe(params.id);
  		console.log(this.heroe)
  	})
  }

  ngOnInit(): void {

  }

  heroe: Heroe;

}
