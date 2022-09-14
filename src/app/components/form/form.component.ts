import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rotateAnimation, downAnimation, upAnimation } from '../../animations/my-animations'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [rotateAnimation, downAnimation, upAnimation]
})
export class FormComponent implements OnInit {

  constructor(private http: HttpClient) {}

  url:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0mx3OYcD9Ge89SC942Y8dxDJrYwmfdjaqA&usqp=CAU'
  animation = ""
  animationState = ""

  getFile(event:any){
    let fileType = event.target.files[0].type
    console.log(event.target.value);
    if(fileType.match(/image\/*/)){
      let reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event:any) =>{
        this.url = event.target.result
        event.target.value =""

      }
    }else{
      alert("please, select correct type of file")
    }
  }

  resetImg(){
    this.url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0mx3OYcD9Ge89SC942Y8dxDJrYwmfdjaqA&usqp=CAU'
  }

  animationType(value:any){
    this.animation = value
    this.animationState = "start"
    setTimeout(()=>this.animationState="end", 0)
    console.log(this.animation);

  }

  ngOnInit(): void {
  }

}
