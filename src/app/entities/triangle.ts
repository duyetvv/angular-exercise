import { Shape } from './shape';

export class Triangle extends Shape {
  private bottomEdge: number = 0;
  private height: number = 0;

  constructor(_bottomEdge: number, _height: number) {
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
