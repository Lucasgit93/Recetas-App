import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastryComponent } from './pastry/pastry.component';
import { ChocolatierComponent } from './chocolatier/chocolatier.component';
import { BakeryComponent } from './bakery/bakery.component';
import { RecipeComponent } from './recipe/recipe.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'bakery', component: BakeryComponent},
      {path: 'chocolatier', component: ChocolatierComponent},
      {path: 'pastry', component: PastryComponent},
      {path: 'view/:id', component: RecipeComponent},
      {path: 'edit/:id', component: EditComponent},
      {path: '**', redirectTo: 'pastry' },
    ]
      
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
