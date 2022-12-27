import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILista } from '../ILista';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  constructor(private readonly http: HttpClient) {}

  getListado() {
    return this.http.get('https://bp-todolist.herokuapp.com/?id_author=2');
  }

  crear(listodo: ILista) {
    let params = new HttpParams();
    params = params.append('id_author', listodo.id_author);
    return this.http.post('https://bp-todolist.herokuapp.com', listodo, {
      params: params,
    });
  }

  actualizar(listodo: ILista) {
    return this.http.put(` https://bp-todolist.herokuapp.com/${listodo.id}`, listodo);
  }

  eliminar(id: number) {
    return this.http.delete(`https://bp-todolist.herokuapp.com/${id}`);
  }
}
