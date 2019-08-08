import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { FormPosterService } from '../form-poster.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  languages  = ['React', 'Python', 'Angular'];
  model = new Employee('Tulasi','Gudibanda','a@a.com','password','male',true,'Angular');
  hasCodeLangError  = false;
  disableSubmit = false;

  constructor(private _formPosterService : FormPosterService) { }

  ngOnInit() {
  }

  firstToUpper(value:string) : void {
    if (value.length > 0) {
    this.model.firstname = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstname = value;
    }
  }

  validateCodeLang(event) {
    if (this.model.codelang === "default") {
      this.hasCodeLangError = true;
      this.disableSubmit = true;
    } else {
      this.hasCodeLangError = false;
      this.disableSubmit = false;
    }
  }

  submitForm(form : NgForm) {
    this._formPosterService.postEmployee(form.value)
      .subscribe(data => console.log('success',data));
  
  }
}
