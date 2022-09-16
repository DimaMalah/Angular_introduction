import { Component, OnInit } from '@angular/core';
import { rotateAnimation, downAnimation, upAnimation } from '../../animations/my-animations'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [rotateAnimation, downAnimation, upAnimation]
})
export class FormComponent implements OnInit {

  constructor() {}

  url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0mx3OYcD9Ge89SC942Y8dxDJrYwmfdjaqA&usqp=CAU'
  animation:string
  animationState:string
  xShift:number
  yShift:number
  xRangeValue:string='100'
  yRangeValue:string='100'
  initialImageHeight:number


  getFile(event:any, element?:any){

    if(!event.target.files[0]) return

    this.resetImgPosition(element)

    let fileType = event.target.files[0].type
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
    setTimeout(()=>{
      this.initialImageHeight = element.children[0].height
    },10)
  }

  resetImgPosition(element:any){
    let position = element.children[0].style
    this.xShift = this.yShift = 0
    this.xRangeValue = this.yRangeValue = '100'
    position.bottom = `0px`
    position.left = `0px`
  }

  resetImg(element:any){
    this.url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx0mx3OYcD9Ge89SC942Y8dxDJrYwmfdjaqA&usqp=CAU'
    this.resetImgPosition(element)
    setTimeout(()=>{
      this.initialImageHeight = element.children[0].height
    },10)
  }

  animationType(value:string){
    this.animation = value
    this.animationState = "start"
    setTimeout(()=>this.animationState="end", 0)
  }

  shiftX(elem: any){
    const style = elem.children[0].style
    style.position = 'relative'
    style.left= `${this.xShift}px`
  }

  shiftY(elem: any){
    const style = elem.children[0].style
    style.position = 'relative'
    style.bottom = `${this.yShift}px`
  }

  onXRangeChange(element:any){
    this.xRangeValue = element.value
  }

  onYRangeChange(element:any){
    this.yRangeValue = element.value
  }

  ngOnInit(): void {}

}
