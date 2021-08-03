import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {NgxPaginationModule} from 'ngx-pagination';
import { PagesRoutingModule } from './pages-routing.module';


import { PastryComponent } from './pastry/pastry.component';
import { ChocolatierComponent } from './chocolatier/chocolatier.component';
import { BakeryComponent } from './bakery/bakery.component';
import { CardComponent } from './components/card/card.component';
import { SearchComponent } from './components/search/search.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { ReturnComponent } from './components/return/return.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorMsgComponent } from './components/error-msg/error-msg.component';
import { ModalComponent } from './components/modal/modal.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    BakeryComponent,
    CardComponent,
    ChocolatierComponent,
    ErrorMsgComponent,
    LoadingComponent,
    ModalComponent,
    PastryComponent,
    RecipeComponent,
    ReturnComponent,
    SearchComponent,
    SidebarComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }
