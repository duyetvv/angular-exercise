import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HOME,
  TICTACTOE,
  ACREAGE
} from './router-path';

const routes: Routes = [
  HOME,
  TICTACTOE,
  ACREAGE
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
