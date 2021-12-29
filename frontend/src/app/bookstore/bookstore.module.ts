import { BookstoreRoutes } from './bookstore.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BooksComponent } from './views/books/books.component';
import { AuthorsComponent } from './views/authors/authors.component';
import { LojaComponent } from './views/loja/loja.component';

@NgModule({
  declarations: [BooksComponent, AuthorsComponent, LojaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    BookstoreRoutes,
  ],exports: [
    SharedModule,BooksComponent,AuthorsComponent,LojaComponent
  ]
})
export class BookstoreModule { }
