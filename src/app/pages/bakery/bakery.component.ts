import { Component, OnInit } from '@angular/core';
import { Recipe } from '../interface/recipe.interface';
import { RecipeService } from '../../shared/services/recipe-service.service';

@Component({
  selector: 'app-bakery',
  templateUrl: './bakery.component.html',
  styleUrls: ['./bakery.component.css'],
})
export class BakeryComponent implements OnInit {
  recipe: Recipe[] = [];

  history: string[] = [];

  recipeSearch: boolean = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.localHistory();
    this.searchRecipes();
  }

  searchRecipes() {
    this.recipeService.getRecipes().subscribe(({ bakery }) => {
      this.recipe.push(...bakery);
    });
  }

  searchOnDB(input: string) {
    this.recipeSearch = true;
    input = input.toLowerCase();
    if (!this.history.includes(input)) {
      this.history.unshift(input);
      this.history = this.history.splice(0, 7);
      localStorage.setItem('bakery', JSON.stringify(this.history));
    }

    this.recipeService.getRecipeBySearch(input).subscribe(({ bakery }) => {
      this.recipe = [];
      this.recipe.push(...bakery);
    });
  }

  listSearch(search: string) {
    search = search.toLowerCase();
    this.recipeService.getRecipeBySearch(search).subscribe(({ bakery }) => {
      this.recipe = [];
      this.recipe.push(...bakery);
    });
  }

  localHistory() {
    const local = JSON.parse(localStorage.getItem('bakery')!) || [];
    if (local === []) {
      this.recipeSearch = false;
      return;
    } else {
      for (const storage of local) {
        this.history.push(storage);
        this.recipeSearch = true;
      }
    }
  }
}
