import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persons } from '../../interfaces/persons';
import { PruebarestService } from '../../services/pruebarest.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: []
})
export class ModalComponent implements OnInit {

  @Input() titulo = '';
  @Input() registro: Persons = null;
  @Input() operacion: number;
  @Output() newLista: EventEmitter<number>;

  constructor(private dataServices: PruebarestService, private mds: NgbModal) {
      this.newLista = new EventEmitter();
   }

  ngOnInit() {
  }

  Acciones() {
    if (this.operacion === 0) {

      /* Eliminar */
      this.newLista.emit(this.registro.id);

      // $('#myModal').modal('dispose');
    } else if (this.operacion === 1) {
      /* Actualizar */
    } else {
      /* Crear */
    }
  }

}
