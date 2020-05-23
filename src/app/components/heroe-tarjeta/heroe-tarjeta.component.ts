import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

 @Input() heroe: Heroe; // le estoy diciendo a angular que la variable heroe viene de un componente padre,
 // esto es basicamente el props de react
 // la variable heroe se asgina desde afuera
 @Input() index: number; // el indice tambien se recibe desde a fuera

 //emitir eventos para llamar funciones de un componente padre
/*
	se usa el output y el eventEmitter para emitir evento del hijo al padre
 */
@Output() heroeSeleccionado : EventEmitter<number>; // El eventEmiteer es el que se encarga de emitir el 
//evento personalizado del componente hijo. El eventEmiteer emite cualquier tipo de dato por lo que dentro de las boquillas
// se debe especificar que tipo de dato se va emitir, en este caso va ser un indice de tipo number para poder enviarlo
// a la funcion ver heroe del componente heroes.component y mostrar la informacion completa del heroe
  constructor(
	private router: Router
  ) { 
  	//Al usarse el output se usa en conjunto con el eventEmiteer, y siempre se debe inicializar el eventEmiter para que pueda enviar
  	// el evento
  	this.heroeSeleccionado = new EventEmitter(); //Se inicaliza el eventEmiter en la variable que va emitir el evento
  	// en este caso this.heroeSeleccionado
  }

  ngOnInit(): void {

  }

  verHeroe(){
  	this.router.navigate(['/heroe',this.index]);
  	//aqui es donde se emite el evento personalizado

  	//this.heroeSeleccionado.emit( this.index); // el valor que emito es un indice, por eso es de tipo number
  }

}

//la funcion input me permite enviar informacion del componente padre al componente hijo
