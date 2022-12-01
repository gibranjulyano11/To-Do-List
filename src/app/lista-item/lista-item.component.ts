import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILista } from '../ILista';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})
export class ListaItemComponent implements OnInit {

  @Input() listaItem: ILista = {
    id_author: 0,
    status: 0,
    description: '',
    finish_at: ''
  }

  @Output() optionSucess = new EventEmitter<boolean>()

  constructor(private readonly tareaService: TareaService) {

  }

  ngOnInit(): void {
  }

  eliminar() {
    console.log(this.listaItem.id)
    if (this.listaItem.id) {
      this.tareaService.deleteTodo(this.listaItem.id).subscribe((res: any) => {
        console.log(res)
        if (res) {
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
      id_author: this.listaItem.id_author,
      status: this.listaItem.status ? 1 : 0,
      description: this.listaItem.description,
      finish_at: new Date().toISOString(),
      id: this.listaItem.id
    }
    this.tareaService.updateTodo(todoAux).subscribe((res) => {
      console.log(res)
      if(res){
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