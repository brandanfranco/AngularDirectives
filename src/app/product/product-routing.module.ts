import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Add',
        component: AddComponent,
      },
      {
        path: '**',
        redirectTo: 'Add',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
