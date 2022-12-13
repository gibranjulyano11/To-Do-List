import { Component, Input, OnInit } from '@angular/core';
import { ISuperheroe } from 'src/app/interfaces/ISuperheroe';

@Component({
  selector: 'app-superheroe-detalle',
  templateUrl: './superheroe-detalle.component.html',
  styleUrls: ['./superheroe-detalle.component.css']
})
export class SuperheroeDetalleComponent implements OnInit {
  @Input()  arraySuperheroes: ISuperheroe[];
  constructor() { 
    this.arraySuperheroes= [
    ];
  }

  ngOnInit(): void {}
  
}