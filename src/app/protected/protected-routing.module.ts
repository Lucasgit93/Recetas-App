import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'recipe', component: NewRecipeComponent},
      {path:'**', redirectTo: 'recipe'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
