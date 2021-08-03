import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../shared/services/recipe-service.service';
import { Recipe } from '../interface/recipe.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  recipe!: Recipe;
  isLoading: boolean = true;
  isSuccess: boolean = false;
  isUpdating: boolean = false;
  isVanished: boolean = false;

  get _id() {
    const { id } = this.route.snapshot.params;
    return id;
  }

  myForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    ingredients: ['', Validators.required],
    preparation: ['', Validators.required],
    menu: ['', Validators.required],
    file: '',
  });

  file!: File;

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.recipeService
        .getRecipe(params.id)
        .subscribe(({ bakery, pastry, chocolatier }) => {
          if (bakery || pastry || chocolatier !== null) {
            this.recipe = bakery || pastry || chocolatier;
            this.formValues();
            this.isLoading = false;
          } else {
            this.isLoading = true;
          }
        });
    });
  }

  imgUpload(e: any) {
    if (e.target.files && e.target.files.length > 0) {
      this.file = e.target.files[0];
    }
  }

  async editRecipe() {
    this.isUpdating = true;
    const formData = new FormData();

    formData.append('file', this.file);
    (await this.recipeService.imgUpdate(formData, this._id)).subscribe(
      (imgUrl) => {
        setTimeout(() => {
          this.isVanished = true;
          setTimeout(() => {
            this.isUpdating = false;
          }, 750);
        }, 500);
        this.isSuccess = true;
        this.myForm.get('file')?.setValue(imgUrl);

        //recipeMenu toma el valor del form para navegar nuevamente a la pagina de donde vino
        //el usuario.
        const recipeMenu = this.recipe.menu;

        const { title, ingredients, preparation, menu, file } =
          this.myForm.value;

        this.recipeService.editRecipe(
          title,
          ingredients,
          preparation,
          menu,
          file,
          this._id
        );
        setTimeout(() => {
          this.recipeService.routeNavigation(recipeMenu);
        }, 1250);
      }
    );
  }

  formValues() {
    this.myForm.get('title')!.setValue(this.recipe.title);
    this.myForm.get('ingredients')!.setValue(this.recipe.ingredients);
    this.myForm.get('preparation')!.setValue(this.recipe.preparation);
    this.myForm.get('menu')!.setValue(this.recipe.menu);
  }
}
