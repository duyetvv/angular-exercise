import { Component, OnInit } from '@angular/core';
import { Triangle } from '../../entities/triangle';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit {
  bottomEdge:number = 0;
  height:number = 0;
  acreage:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(_triangle) {
    const triangle:Triangle = new Triangle(this.bottomEdge, this.height);
    this.acreage = triangle.getAcreage();
  }
}
