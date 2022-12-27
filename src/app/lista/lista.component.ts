import { Component, OnInit } from '@angular/core';
import { ILista } from '../ILista';
import { TareaService } from '../services/tarea.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  listadoItem: ILista = {
    id_author: 2,
    status: 0,
    description: '',
    finish_at: ''
  };

  listas: ILista[] = [];

  tareasCompletadas: number = 0;
  errorTarea: boolean = false;

  constructor(private readonly tareaSvc: TareaService) {

    console.log()

  }

  ngOnInit(): void {

    this.getListados(true)

  }

  crear(forma: NgForm) {
    this.listadoItem.finish_at = new Date().toISOString();
    this.tareaSvc.crear(this.listadoItem).subscribe((res: any) => {
      if (res.success) {
        forma.reset()
        this.getListados(true)
      } else {
        this.errorTarea = false
      }
    }, error => {
      console.log(error.message)
      this.errorTarea = false

    })
  }

  getListados(bandera: boolean) {
    if (bandera) {
      this.tareasCompletadas = 0;
      this.listas = []
      this.tareaSvc.getListado().subscribe((res: any) => {
        this.listas = [...res.data]
        console.log(this.listas)
        this.listas.forEach((todo) => {
          if (todo.status || todo.status === 1) {
            this.tareasCompletadas++;
          }
        })
      }, error => {
        console.log(error.message);
      })
    }
  }

}
