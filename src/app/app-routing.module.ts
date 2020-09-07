import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {ROUTES} from './routes';

const routes: Routes = ROUTES;

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
