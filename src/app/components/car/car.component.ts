import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {



  @Input() carItem:{name:string, year:number};

  constructor() { }

  ngOnInit(): void {
  }

}
