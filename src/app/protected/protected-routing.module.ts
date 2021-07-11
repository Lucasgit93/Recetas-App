import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'recipe', component: NewRecipeComponent},
      {path:'login', component: LoginComponent},
      {path:'**', redirectTo: 'login'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
