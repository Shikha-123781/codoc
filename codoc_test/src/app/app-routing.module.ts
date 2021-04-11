import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { ShowDetailsComponent } from './show-details/show-details.component'; 
const routes: Routes = [{ path:'', component: LoginComponent},{path:'showDetails/:username', component: ShowDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }