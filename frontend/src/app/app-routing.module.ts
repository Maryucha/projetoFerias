import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './bookstore/shared/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./bookstore/bookstore.module').then((m) => m.BookstoreModule)
  },
  {
    path:'**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
