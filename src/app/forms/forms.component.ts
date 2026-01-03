import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // setTimeout(() =>{
    //  console.log(this.SignUpForm)
    // },0)
  }

  @ViewChild('SignUpForm') SignUpForm !:NgForm;

  onSubmit(){
    console.log(this.SignUpForm)
  }


}
