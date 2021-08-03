import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../shared/services/recipe-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  isLoggedIn: boolean = false;

  constructor( private recipeService: RecipeService,
               private formBuilder : FormBuilder) { }




ngOnInit(): void {
  if(localStorage.getItem('token')){
    this.isLoggedIn = true;
  }
  
}


login(){
  const { username, password} = this.myForm.value;


  this.recipeService.userLogin( username, password )
  .subscribe( resp => {
    if( resp === true ){
      
      this.isLoggedIn = true;

    } else {
      this.isLoggedIn = false;
    }
  })
}
}
