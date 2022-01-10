import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  images= [
    'comArbeit.jfif','uniPaderborn.jfif', 'comProg.jfif', 'computer.jfif', 'computerArb.jfif', 'computerArbeit.jfif','newCom.jfif'
  ];
  headlines= [
    'Bring engineering to the next level','Graduated at Uni Paderborn', 'Born to code', 'Code is power', 'More Shills more Power', 'Its Cool to be Different','we are all different and that is beautiful'
  ];
  currentImage= 0;
  showImage = true;

  ngOnInit(){
    this.updateImage();
  }
  updateImage(){
    setInterval(()=>{
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 10);
    }, 8000);
  }
  constructor() { }

}
