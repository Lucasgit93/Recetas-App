import { AfterViewInit, Component } from '@angular/core';
import { Recipe } from '../interface/recipe.interface';
import { RecipeService } from '../../shared/services/recipe-service.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css'],
})
export class BakeryComponent implements AfterViewInit {
  recipe: Recipe[] = [];

  history: string[] = [];

  constructor(private recipeService: RecipeService) {}

  ngAfterViewInit(): void {
    this.searchRecipes();
  }

  searchRecipes() {
    this.recipeService
      .getRecipes()
      .subscribe( ({bakery} ) => {
        this.recipe = bakery;
      } )
  }

  searchOnDB(input: string) {
    //ACA TRAER LA INFO DEL SERVICIO

    this.recipeService.getRecipes();

    console.log(input);
  }
}
