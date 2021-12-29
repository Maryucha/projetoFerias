import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './views/authors/authors.component';
import { BooksComponent } from './views/books/books.component';
import { LojaComponent } from './views/loja/loja.component';

const routes: Routes = [
  {
    path: '',
    component: LojaComponent,
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  }
];

export const BookstoreRoutes = RouterModule.forChild(routes);
