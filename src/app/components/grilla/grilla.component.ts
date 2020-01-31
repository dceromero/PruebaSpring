import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Persons } from '../../interfaces/persons';
import { PruebarestService } from '../../services/pruebarest.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styles: []
})
export class GrillaComponent implements OnInit {

  @Output() cambiarTab: EventEmitter<number>;

  @Input() listapersons: Observable<Persons>;
  persona: Persons;
  tituloModal: string;
  accion: number;
  constructor(private dataService: PruebarestService) {
    this.ObtenerDatos();
    this.cambiarTab = new EventEmitter();
  }
  ngOnInit() {
  }

  buscarId( id: number ) {
    this.cambiarTab.emit(id);
  }

  Eliminar( id ) {
    this.dataService.getDeleteClient(id).subscribe(() => {
      this.ObtenerDatos();
    });
  }

  ObtenerDatos() {
    this.listapersons = this.dataService.getDataServices();
  }

  Persona( persona: Persons, titulo: string, accion: number) {
    this.tituloModal = titulo;
    this.persona = persona;
    this.accion = accion;
  }

}
