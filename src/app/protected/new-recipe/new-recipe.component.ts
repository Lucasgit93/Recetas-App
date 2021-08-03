import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../shared/services/recipe-service.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css'],
})
export class NewRecipeComponent {
  myForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    ingredients: ['', Validators.required],
    preparation: ['', Validators.required],
    menu: ['', Validators.required],
    file: '',
  });

  file!: File;
  isLoading: boolean = false;
  isSuccess: boolean = false;
  isVanished: boolean = true;

  constructor(private fb: FormBuilder, private recipeService: RecipeService) {}

  imgUpload(e: any) {
    if (e.target.files && e.target.files.length > 0) {
      this.file = e.target.files[0];
    }
  }

  async submit() {
    this.isLoading = true;
    const formData = new FormData();
    formData.append('file', this.file);

    (await this.recipeService.imgUpload(formData)).subscribe((resp) => {
      this.myForm.get('file')!.setValue(resp);
      const { title, ingredients, preparation, menu } = this.myForm.value;

      this.recipeService
        .createRecipe(
          title,
          ingredients,
          preparation,
          menu,
          this.myForm.get('file')!.value
        )
        .subscribe();
      this.myForm.reset();
      this.isLoading = false;
      this.isSuccess = true;
      setTimeout(() => {
        this.isVanished = true;
        setTimeout(() => {
          this.isSuccess = false;
        }, 2000);
      }, 1500);
    });
  }
}
