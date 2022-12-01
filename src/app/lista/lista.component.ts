import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ILista } from '../ILista';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  listaItem: ILista = {
    id_author: 2,
    status: 0,
    description: '',
    finish_at: ''
  };

  lista: ILista[] = [];

  tareaCompleteda: number = 0;

  constructor(private readonly tareaService: TareaService) {

    console.log()

  }

  ngOnInit(): void {

    this.getListado(true)

  }

  crear() {
    this.listaItem.finish_at = new Date().toISOString();
    this.tareaService.crearTodo(this.listaItem).subscribe((res: any) => {
      if (res) {
        this.getListado(true)
      }
    }, error => {
      console.log(error.message)
    })
  }

  getListado(bandera: boolean) {
    if (bandera) {
      this.tareaCompleteda = 0;
      this.lista = []
      this.tareaService.getListado().subscribe((res: any) => {
        this.lista = [...res.data]
        console.log(this.lista)
        this.lista.forEach((todo) => {
          if (todo.status || todo.status === 1) {
            this.tareaCompleteda++;
          }
        })
      }, error => {
        console.log(error.message);
      })
    }
  }

}