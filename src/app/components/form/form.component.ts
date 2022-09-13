import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  answers=[{
    type:'yes',
    text:'yes'
  },{
    type:'no',
    text:'no'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
