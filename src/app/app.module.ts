import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AcreageComponent } from './acreage/acreage.component';
import { FormsModule } from '@angular/forms';


import { CalculationService } from './services/calculation.service';
import { TriangleComponent } from './shapes/triangle/triangle.component';
import { SquareComponent } from './shapes/square/square.component';


@NgModule({
  declarations: [
    AppComponent,
    TictactoeComponent,
    HomeComponent,
    AcreageComponent,
    TriangleComponent,
    SquareComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
