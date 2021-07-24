import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/pages/interface/recipe.interface';
import { RecipeService } from '../../../shared/services/recipe-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent{


  myForm: FormGroup = this.fb.group({
    recipe: ['']
  })

  @Output() onRecipeSearch: EventEmitter<string> = new EventEmitter();

  constructor(
    private recipeService: RecipeService,
    private fb: FormBuilder
  ) {}

  searchOnDB() {
    console.log()
    this.onRecipeSearch.emit( this.myForm.value );
  }
}

//TODO: CAPTURAR EL VALOR DEL INPUT Y PASARLO AL COMPONENTE PADRE
