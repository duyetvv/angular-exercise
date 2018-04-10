import { Component, OnInit } from '@angular/core';
import { Square } from '../../entities/square';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
  width:number = 0;
  height:number = 0;
  acreage:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const square = new Square(this.width, this.height);
    this.acreage = square.getAcreage();
  }

}
