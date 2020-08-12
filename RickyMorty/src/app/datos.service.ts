import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  baseUrl: string;
  constructor(private httpCliente: HttpClient) {
    this.baseUrl = 'https://rickandmortyapi.com/api/character/';
  }

  getAllpj(): Promise<any> {
    return this.httpCliente.get(this.baseUrl).toPromise();
  }
  getByPage(pPage): Promise<any> {
    return this.httpCliente.get(`${this.baseUrl}?page=${pPage}`).toPromise();
  }
}
