import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe-service.service';
import { Recipe } from '../interface/recipe.interface';

@Component({
  selector: 'app-pastry',
  templateUrl: './pastry.component.html',
  styleUrls: ['./pastry.component.css'],
})
export class PastryComponent implements OnInit {
  recipe: Recipe[] = [];

  history: string[] = [];

  recipeSearch: boolean = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.localHistory();
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(({ pastry }) => {
      this.recipe.push(...pastry);
    });
  }

  searchOnDB(input: string) {
    this.recipeSearch = true;
    if (!this.history.includes(input)) {
      this.history.push(input);
      localStorage.setItem('pastry', JSON.stringify(this.history));
    }

    this.recipeService.getRecipeBySearch(input).subscribe(({ pastry }) => {
      this.recipe = [];
      this.recipe.push(...pastry);
    });
  }

  listSearch(search: string) {
    search = search.toLowerCase();
    this.recipeService.getRecipeBySearch(search).subscribe(({ pastry }) => {
      this.recipe = [];
      this.recipe.push(...pastry);
    });
  }

  localHistory() {
    const local = JSON.parse(localStorage.getItem('pastry')!) || [];
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
