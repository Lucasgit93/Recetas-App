import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PastryComponent } from './pastry/pastry.component';
import { ChocolatierComponent } from './chocolatier/chocolatier.component';
import { BakeryComponent } from './bakery/bakery.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from '../shared/search/search.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ReturnComponent } from './components/return/return.component';


@NgModule({
  declarations: [
    PastryComponent,
    ChocolatierComponent,
    BakeryComponent,
    CardComponent,
    SearchComponent,
    SidebarComponent,
    ReturnComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
