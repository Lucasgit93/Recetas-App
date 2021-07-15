import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PastryComponent } from './pastry/pastry.component';
import { ChocolatierComponent } from './chocolatier/chocolatier.component';
import { BakeryComponent } from './bakery/bakery.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path: 'bakery', component: BakeryComponent},
      {path: 'chocolatier', component: ChocolatierComponent},
      {path: 'pastry', component: PastryComponent},
      {path: '**', redirectTo: 'pastry' },
    ]
      
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
