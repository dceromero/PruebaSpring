import { Component, Input } from '@angular/core';
import { Persons } from './interfaces/persons';
import { PruebarestService } from './services/pruebarest.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import * as jq from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring';
  listapersons: Observable<Persons>;
  @Input() accion: number;


  constructor(private dataService: PruebarestService) {
    this.listapersons = this.dataService.getDataServices();
  }

  getSentData(persona: NgForm) {

    this.dataService.postCreate(persona.value).subscribe(() => {
      this.listapersons = this.dataService.getDataServices();
     });

  }

  onClick( event , ctrl ) {
    const id = `#${ctrl.href}`;
    jq('#home').fadeOut();
    console.log(id);
    jq(id).fadeIn();
  }

}

