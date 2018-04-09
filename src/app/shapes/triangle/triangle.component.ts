import { Component, OnInit } from '@angular/core';
import { Triangle } from '../../entities/triangle';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit {
  triangle:Triangle = new Triangle(0, 0);
  acreage:number;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(_triangle) {
    debugger;
    this.acreage = this.triangle.getAcreage();
  }
}
