import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acreage',
  templateUrl: './acreage.component.html',
  styleUrls: ['./acreage.component.scss']
})
export class AcreageComponent implements OnInit {
  shapes: string[] = ['triangle', 'square'];
  shape: string = 'triangle';

  constructor() { }

  ngOnInit() {
  }



}
