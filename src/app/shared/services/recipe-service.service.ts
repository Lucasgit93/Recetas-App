import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { tap, map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { RecipeResponse } from './interface';



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


  getRecipe(){}


  createRecipe(){}


  editRecipe(){}


  deleteRecipe(){}




  
}
