import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    NewRecipeComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule
  ]
})
export class ProtectedModule { }
