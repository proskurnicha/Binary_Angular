import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   pathMatch:'full',
  //   redirectTo: 'http://localhost:54956/api/Flights',
  // }
  //  { 
  //   path: 'detail/:id', 
  //   component: HeroDetailComponent
  //  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
