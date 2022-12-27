import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILista } from '../ILista';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})
export class ListaItemComponent implements OnInit {

  @Input() listadoItem: ILista = {
    id_author: 0,
    status: 0,
    description: '',
    finish_at: ''
  }

  @Output() optionSucess = new EventEmitter<boolean>()

  constructor(private readonly tareaSvc: TareaService) {

  }

  ngOnInit(): void {
  }

  eliminar() {
    console.log(this.listadoItem.id)
    if (this.listadoItem.id) {
      this.tareaSvc.eliminar(this.listadoItem.id).subscribe((res: any) => {
        console.log(res)
        if (res.success) {
          this.optionSucess.emit(true)
        } else {
          this.optionSucess.emit(false)

        }
      }, error => {
        console.log(error.message)
        this.optionSucess.emit(false)
      })
    }

  }

  cambiarEstado() {
    const todoAux: ILista = {
      id_author: this.listadoItem.id_author,
      status: this.listadoItem.status ? 1 : 0,
      description: this.listadoItem.description,
      finish_at: new Date().toISOString(),
      id: this.listadoItem.id
    }
    this.tareaSvc.actualizar(todoAux).subscribe((res: any) => {
      console.log(res)
      if(res.success){
        this.optionSucess.emit(true)
      }else {
        this.optionSucess.emit(false)
      }
    }, error => {
      console.log(error.message)
      this.optionSucess.emit(false)
    })
  }

}
