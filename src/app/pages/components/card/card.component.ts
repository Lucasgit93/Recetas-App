import { Component, Input } from '@angular/core';
import { Recipe } from '../../interface/recipe.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input() recipe!: Recipe;

  
  titulo: string = "Chipa"

  constructor() { }



}
