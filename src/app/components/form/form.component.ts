import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persons } from '../../interfaces/persons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  constructor() {
      this.enviarDatos = new EventEmitter();
  }
  @Output() enviarDatos: EventEmitter<object  >;
  persona: Persons = {
    id : 0,
    nombres : '',
    apellidos : '',
    mail : '',
    createat : null
  };
  ngOnInit() {

  }

  dataSent( form: NgForm ) {

    this.enviarDatos.emit(form);
  }

}
