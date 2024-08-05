import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'breed-list', loadChildren: () => import('../app/pages/breed-list/breed-list.module').then(m => m.BreedListModule) },
  { path: '**', redirectTo: 'breed-list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
