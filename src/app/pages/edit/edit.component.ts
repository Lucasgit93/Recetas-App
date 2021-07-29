import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../shared/services/recipe-service.service';
import { Recipe } from '../interface/recipe.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  recipe!: Recipe;

  isLoading: boolean = true;

  get _id() {
    const { id } = this.route.snapshot.params;
    return id;
  }

  myForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    ingredients: [''],
    preparation: [''],
    menu: ['', Validators.required],
    file: [''],
  });

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipeService
        .getRecipe(params.id)
        .subscribe(({ bakery, pastry, chocolatier }) => {
          if (bakery || pastry || chocolatier !== null) {
            this.recipe = bakery || pastry || chocolatier;
            this.myForm.get('title')!.setValue(this.recipe.title);
            this.myForm.get('ingredients')!.setValue(this.recipe.ingredients);
            this.myForm.get('preparation')!.setValue(this.recipe.preparation);
            this.myForm.get('menu')!.setValue(this.recipe.menu);
            this.isLoading = false;
          } else {
            this.isLoading = true;
          }
        });
    });
  }

  editRecipe() {
    const recipeMenu = this.recipe.menu;
    const { title, ingredients, preparation, menu, file } = this.myForm.value;
    this.recipeService.editRecipe(
      title,
      ingredients,
      preparation,
      menu,
      file,
      this._id
    );
    this.recipeService.routeNavigation(recipeMenu);
  }
}
