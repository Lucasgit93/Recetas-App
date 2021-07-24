import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe-service.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../interface/recipe.interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe!: Recipe;



  isLoading: boolean = true

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipeService
        .getRecipe(params.id)
        .subscribe(({ bakery, chocolatier, pastry }) => {
          if (bakery || chocolatier || pastry !== null) {
            this.isLoading = false;
            this.recipe = bakery || chocolatier || pastry;
          } else {
            this.isLoading = true;
          }
        });
    });
  }
}
