import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.scss']
})
export class TictactoeComponent implements OnInit {

  winArrs:number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [0, 4, 8]
  ];

  squares:any[] = [ '', '', '', '', '', '', '', '', '' ];

  message:string = '';

  constructor() { }

  ngOnInit() {
  }

  squareClick(index): void {
    if (this.squares[index] !== '') {
      return;
    }
    this.squares[index] = 'x'

    this.checkResult();
    this.autoFill();
  }

  resetGame() {
    this.squares = [ '', '', '', '', '', '', '', '', '' ];
    this.message = '';
  }

  private autoFill(): void {
    const index:number = this.getIndexFill();
    this.squares[index] = 'o';
    this.checkResult();
  }

  private getIndexFill(): number {
    const emptyArr: number[] = this.squares.reduce((acc, val, i) => {
      if (!val.trim().length) {
        acc.push(i);
      }

      return acc;
    }, []);

    return emptyArr[Math.floor(Math.random() * emptyArr.length)];
  }

  private checkResult():void {
    const tmp = this.squares.reduce((acc, val, i) => {
      (val === 'x') && acc.x.push(i);
      (val === 'o') && acc.o.push(i);

      return acc;
    }, {x: [], o: []})

    if (this.checkWin(tmp.x)) {
      this.message = 'You Win';
      return;
    }

    if (this.checkWin(tmp.o)) {
      this.message = 'you lose';
      return;
    }

    this.message = 'you draw';
  }

  private checkWin(arr) {
    if (arr.length < 3) {
      return false;
    }

    for (let winArr of this.winArrs) {
      let tmp = arr.concat(winArr).sort();
      let uniArr = new Set(tmp);

      if (arr.length === Array.from(uniArr).length) {
        return winArr;
      }
    }

    return false;
  }
}
