import { Component } from '@angular/core';
import { Recipe } from '../interface/recipe.interface';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css']
})
export class BakeryComponent   {

  recipe: Recipe = {
    title: '',
    ingredients: '',
    preparation: '',
    menu: '',
    file: ''
  }

  history: string[] = [];

  constructor() { }






  recipeSearch( input: string ){
    //ACA TRAER LA INFO DEL SERVICIO
    
    
  }

}
