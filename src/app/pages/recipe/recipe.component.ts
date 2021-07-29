import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../interface/recipe.interface';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe!: Recipe;

  isLoading: boolean = true;
  isModal: boolean = false;
  _id!: string;
  routeId!: string;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
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

    this.routeId = this.route.snapshot.params.id;
  }

  recipeDelete(id: string) {
    this.isModal = true;
    this._id = id;
  }

  cancel(input: boolean) {
    this.isModal = false;
  }

  delete(input: boolean) {
    const recipeMenu = this.recipe.menu;
    this.isModal = false;
    this.recipeService.deleteRecipe(this._id).subscribe();
    this.recipeService.routeNavigation(recipeMenu);
  }
}
