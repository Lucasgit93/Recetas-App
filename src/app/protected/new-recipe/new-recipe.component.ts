import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../shared/services/recipe-service.service';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {


myForm: FormGroup = this.fb.group(
  {
    title: ['', Validators.required],
    ingredients: ['', Validators.required],
    preparation: ['', Validators.required],
    menu: ['', Validators.required],
    file: ['', Validators.required],
  }
)







  constructor( private fb: FormBuilder,
               private recipeService: RecipeService) { }



submit(){
  const { title, ingredients, preparation, menu, file } = this.myForm.value;

  this.recipeService.createRecipe( title, ingredients, preparation, menu, file )
  .subscribe();

  this.myForm.reset();
}



}
