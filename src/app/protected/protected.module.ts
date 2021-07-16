import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewRecipeComponent,
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
