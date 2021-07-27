import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../shared/services/recipe-service.service';
import { Recipe } from '../interface/recipe.interface';

@Component({
  selector: 'app-chocolatier',
  templateUrl: './chocolatier.component.html',
  styleUrls: ['./chocolatier.component.css'],
})
export class ChocolatierComponent implements OnInit {
  recipe: Recipe[] = [];

  history: string[] = [];

  recipeSearch: boolean = false;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.localHistory();
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(({ chocolatier }) => {
      this.recipe.push(...chocolatier);
    });
  }

  searchOnDB(input: string) {
    this.recipeSearch = true;
    input = input.toLowerCase();
    if (!this.history.includes(input)) {
      this.history.push(input);
      localStorage.setItem('chocolatier', JSON.stringify(this.history));
    }

    this.recipeService.getRecipeBySearch(input).subscribe(({ chocolatier }) => {
      this.recipe = [];
      this.recipe.push(...chocolatier);
    });
  }

  listSearch(search: string) {
    this.recipeService.getRecipeBySearch(search).subscribe(({ chocolatier }) => {
      this.recipe = [];
      this.recipe.push(...chocolatier);
    });
  }

  localHistory() {
    const local = JSON.parse(localStorage.getItem('chocolatier')!) || [];
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
