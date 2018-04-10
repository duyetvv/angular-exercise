import { Shape } from './shape';

export class Triangle extends Shape {
  private bottomEdge: number = 0;
  private height: number = 0;

  constructor(_bottomEdge: number = 0, _height: number = 0) {
    super();
    this.bottomEdge = _bottomEdge;
    this.height = _height;
  }

  getAcreage() {
    this.acreage = (this.bottomEdge * this.height) / 2;
    this.logAcreage();

    return this.acreage;
  }
}
