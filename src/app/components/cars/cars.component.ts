import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars = [
    {
    name: "BMW",
    year: 1990
  },{
    name: "Audi",
    year: 1999
  },{
    name: "Nissan",
    year: 2021
  },{
    name: "Toyota",
    year: 1993
  }];


  updateCarList(car:{name:string, year:number}){
    this.cars.push(car)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
