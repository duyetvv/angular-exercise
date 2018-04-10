import { Shape } from './shape';

export class Square extends Shape {
  private width:number;
  private height:number;

  constructor(_width:number = 0, _height:number = 0) {
    super();
    this.width = _width;
    this.height = _height;
  }

  getAcreage() {
    this.acreage = this.width * this.height;
    this.logAcreage();

    return this.acreage;
  }
}
