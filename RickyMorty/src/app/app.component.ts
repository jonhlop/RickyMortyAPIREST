import { Component } from '@angular/core';
import { DatosService } from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RickyMorty';
  pj: any[];
  paginaActual: number;
  numPaginas: number;

  constructor(private pjService: DatosService) {
    this.paginaActual = 1;
    this.numPaginas = 0;
  }

  ngOnInit() {
    this.pjService
      .getAllpj()
      .then((response) => {
        console.log(response);
        this.pj = response.results;
        this.numPaginas = response['info']['pages'];
      })
      .catch((err) => console.log(err));
  }

  async changePage(siguiente: boolean) {
    this.paginaActual = siguiente
      ? this.paginaActual + 1
      : this.paginaActual - 1;
      this.pj = (await this.pjService.getByPage(this.paginaActual))['results']
  }
}
