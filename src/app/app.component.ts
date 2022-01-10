import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  images= [
    'comArbeit.jfif', 'comProg.jfif', 'computer.jfif', 'computerArb.jfif', 'computerArbeit.jfif','newCom.jfif'
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
}
