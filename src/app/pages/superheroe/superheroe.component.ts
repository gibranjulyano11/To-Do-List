import { Component, OnInit } from '@angular/core';
import { ISuperheroe } from 'src/app/interfaces/ISuperheroe';

@Component({
  selector: 'app-superheroe',
  templateUrl: './superheroe.component.html',
  styleUrls: ['./superheroe.component.css']
})
export class SuperheroeComponent implements OnInit {

  superheroe: ISuperheroe;
  arrayHeroe: ISuperheroe[];
  constructor() {
    this.superheroe = {
      nombre: '',
      pelicula: '',
      comic: '',
      descripcion: '',
    };

    this.arrayHeroe = [];
  }

  ngOnInit(): void {}

  crearSuperheroe() {
    let superheroes: ISuperheroe;
    superheroes = {
      nombre: this.superheroe.nombre,
      pelicula: this.superheroe.pelicula,
      comic: this.superheroe.comic,
      descripcion: this.superheroe.descripcion
    };

    this.arrayHeroe.push(superheroes);
  }
}