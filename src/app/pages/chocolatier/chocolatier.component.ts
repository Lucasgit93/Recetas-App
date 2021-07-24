import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe-service.service';
import { Recipe } from '../interface/recipe.interface';

@Component({
  selector: 'app-chocolatier',
  templateUrl: './chocolatier.component.html',
  styleUrls: ['./chocolatier.component.css']
})
export class ChocolatierComponent implements OnInit {



  recipe: Recipe[] = []

  history: string[] = [];

  constructor( private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getRecipes();
  }


  getRecipes(){
    this.recipeService.getRecipes()
    .subscribe( ({chocolatier}) => {
      this.recipe = chocolatier;
    })
  }


  searchOnDB(input: string){}
}
