import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent{

  
  myForm: FormGroup = this.fb.group({
    recipe: ['']
  })



  input: string = this.myForm.value.recipe;

  @Output() onRecipeSearch: EventEmitter<string> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) {}

  searchOnDB() {
    this.onRecipeSearch.emit( this.myForm.value.recipe.toLowerCase());
  }


}