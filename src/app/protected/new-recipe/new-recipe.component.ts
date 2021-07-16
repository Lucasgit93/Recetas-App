import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {


myForm: FormGroup = this.fb.group(
  {
    title: ['', Validators.required],
    ingredients: ['', Validators.required],
    preparation: ['', Validators.required],
    menu: ['', Validators.required],
    file: ['', Validators.required],
  }
)







  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }



submit(){
  console.log(this.myForm.value)
}



}
