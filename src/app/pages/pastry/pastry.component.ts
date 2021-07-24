import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe-service.service';
import { Recipe } from '../interface/recipe.interface';

@Component({
  selector: 'app-pastry',
  templateUrl: './pastry.component.html',
  styleUrls: ['./pastry.component.css']
})
export class PastryComponent implements OnInit {


  
  recipe: Recipe[] = []

  history: string[] = [];

  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }


  getRecipes(){
    this.recipeService.getRecipes()
    .subscribe( ({ pastry }) => {
      this.recipe = pastry
    } )
  }

  searchOnDB(input: string){}
  
}
