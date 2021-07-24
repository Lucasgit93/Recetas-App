import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { tap, map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { RecipeResponse } from './interface';
import { Recipe } from '../../pages/interface/recipe.interface';



interface User {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

 private baseUrl: string = environment.baseUrl
 private _user! : User

 get user() {
   return {...this._user};
 }



  constructor( private http: HttpClient) { }


  userLogin( username: string, password: string){
    const url = `${this.baseUrl}/login`

    const body = { username, password };



    return this.http.post<RecipeResponse>( url, body)
    .pipe(
      tap( resp => {
        if(resp.ok){
          localStorage.setItem( 'token', resp.token! )
          this._user = {
            token: resp.token!
          }
        }
      }),
      map( resp => resp.ok ),
      catchError( err => of( err.error.msg ))
    )
  }


  getRecipes( recipe: string ){
    const bakery = `${this.baseUrl}/recipe/bakery`;

    const pastry = `${this.baseUrl}/recipe/pastry`;

    const chocolatier = `${this.baseUrl}/recipe/chocolatier`;

    const body = { recipe };
    
    if(bakery){
      return this.http.get<Recipe>(bakery, )

    } else if(pastry){
      return this.http.get<Recipe>(pastry,)
    } else{
      return this.http.get<Recipe>(chocolatier, )
    }
  }


  createRecipe( title: string, ingredients: string, preparation: string, menu: string, file: string){

    const url = `${this.baseUrl}/new`;
    const body = { title, ingredients, preparation, menu, file };
    const headers = new HttpHeaders().set('token', localStorage.getItem('token') || '')

    return this.http.post<RecipeResponse>(url, body, { headers })
      .pipe(
        map(resp => resp.ok),
        catchError( err => of(err.error.msg))
      )

  }


  editRecipe(){}


  deleteRecipe(){}




  
}
