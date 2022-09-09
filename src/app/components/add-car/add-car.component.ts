import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent {

  carName: string = ""
  carYear: number = 2020

   @Output() onAddCar = new EventEmitter<{name:string, year:number}>()

  addCar(){
    this.onAddCar.emit({
      name:this.carName,
      year:this.carYear
    })
    this.carName=""
    this.carYear=2022
  }


}
