import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../shared/services/recipe-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  myForm: FormGroup = this.formBuilder.group({
    username: ['admin', [Validators.required]],
    password: ['admintest', [Validators.required]],
  });

  isLoggedIn: boolean = false;

  constructor( private recipeService: RecipeService,
               private formBuilder : FormBuilder) { }


login(){
  const { username, password} = this.myForm.value;


  this.recipeService.userLogin( username, password )
  .subscribe( resp => {
    if( resp === true ){
      
      this.isLoggedIn = true;

    } else {
      this.isLoggedIn = false;
      console.log(resp)
    }
  })
}
}
