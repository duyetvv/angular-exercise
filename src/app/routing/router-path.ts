import { TictactoeComponent } from '../tictactoe/tictactoe.component';
import { HomeComponent } from '../home/home.component';
import { AcreageComponent } from '../acreage/acreage.component'
import { TriangleComponent } from '../shapes/triangle/triangle.component';
import { SquareComponent } from '../shapes/square/square.component';

export const HOME = {
  path: '',
  component: HomeComponent
}

export const TICTACTOE = {
  path: 'tictactoe',
  component: TictactoeComponent
}

export const ACREAGE = {
  path: 'acreage',
  component: AcreageComponent,
  children: [
    {
      path: 'triangle',
      component: TriangleComponent
    }, {
      path: 'square',
      component: SquareComponent
    }
  ]
}
