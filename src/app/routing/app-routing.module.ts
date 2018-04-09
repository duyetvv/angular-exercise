import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as ROUTE from './router-path';

const routes: Routes = [
  ROUTE.HOME,
  ROUTE.TICTACTOE,
  ROUTE.ACREAGE
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
