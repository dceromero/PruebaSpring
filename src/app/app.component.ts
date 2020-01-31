import { Component, Input } from '@angular/core';
import { Persons } from './interfaces/persons';
import { PruebarestService } from './services/pruebarest.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import * as jq from 'jquery';
import { JSDocTagName } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring';
  listapersons: Observable<Persons>;
  personId = 0;
  @Input() accion: number;
  personas: Persons = {
    id : 0,
    nombres : '',
    apellidos : '',
    mail : '',
    createat : null
  };


  constructor(private dataService: PruebarestService) {
    this.listapersons = this.dataService.getDataServices();
  }

  getSentData(persona: NgForm) {
    if (this.accion === 2) {
      persona.value.id = this.personId;
      this.dataService.PutUpdate(persona.value).subscribe(() => {
        this.listapersons = this.dataService.getDataServices();
       });
    } else {
      this.dataService.postCreate(persona.value).subscribe(() => {
        this.listapersons = this.dataService.getDataServices();
       });
    }

    jq('#home').addClass('active show');
    jq('#home-tab').addClass('active show');
    jq('#profile-tab').removeClass('active show');
    jq('#profile').removeClass('active show');
    jq('[required]').val('');
  }

  onClick( id: number ) {
    jq('#home').removeClass('active show');
    jq('#home-tab').removeClass('active show');
    jq('#profile-tab').addClass('active show');
    jq('#profile').addClass('active show');
    this.personId = id;
    this.dataService.getReadyById(id).subscribe(
      data => {
        this.personas = data;
        this.accion = 2;
      }
    );
  }


  formulario() {
    jq('[required]').val('');
    this.personId = 0;
  }

}

