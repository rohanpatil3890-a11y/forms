import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

   @ViewChild('signUpForm') signUpForm !: NgForm

  ngOnInit(): void {

  
  }

 onsubmitForm(){
  console.log(this.signUpForm);
  
 }
   
// onAddData(){
//  console.log( this.signUpForm.value)
// }

}
