import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';

import { tap, map, catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { RecipeResponse } from './interface';

interface User {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private baseUrl: string = environment.baseUrl;
  private _user!: User;
  private _history: string[] = [];





  get user() {
    return { ...this._user };
  }

  constructor(private http: HttpClient, private router: Router) {}

  userLogin(username: string, password: string) {
    const url = `${this.baseUrl}/login`;

    const body = { username, password };

    return this.http.post<RecipeResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
          this._user = {
            token: resp.token!,
          };
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }


  /*-----------CRUD--------------- */
  getRecipes(): Observable<any> {
    const urlParam = this.router.url.split('/')[2];

    const url = `${this.baseUrl}/recipes/${urlParam}`;

    return this.http.get<any>(url).pipe(
      tap(({ recipe }) => recipe),
      catchError((err) => of(err.error.msg))
    );
  }

  getRecipe(id: string): Observable<any> {
    const url = `${this.baseUrl}/recipe/${id}`;

    return this.http.get(url);
  }

  getRecipeBySearch(input: string): Observable<any> {
    const url = `${this.baseUrl}/search?title=${input}`;

    return this.http.get<any>(url).pipe(tap(({ recipe }) => recipe));
  }

  createRecipe(
    title: string,
    ingredients: string,
    preparation: string,
    menu: string,
    file: string
  ) {
    const url = `${this.baseUrl}/new`;
    const body = { title, ingredients, preparation, menu, file };

    const headers = new HttpHeaders().set(
      'token',
      localStorage.getItem('token') || ''
    );

    return this.http.post<RecipeResponse>(url, body, { headers }).pipe(
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }

  editRecipe(
    title: string,
    ingredients: string,
    preparation: string,
    menu: string,
    file: string,
    id: string
  ) {
    const url = `${this.baseUrl}/recipe/${id}`;
    const body = { title, ingredients, preparation, menu, file };

    const headers = new HttpHeaders().set(
      'token',
      localStorage.getItem('token') || ''
    );

    this.http.put<RecipeResponse>(url, body, { headers }).subscribe();
  }

  deleteRecipe(id: string) {
    const url = `${this.baseUrl}/recipe/${id}`;
    const headers = new HttpHeaders().set(
      'token',
      localStorage.getItem('token') || ''
    );

    return this.http.delete<RecipeResponse>(url, { headers });
  }



  /* ---------carga/actualizacion/borrado de imgs-------- */
   imgUpload( data: any){
    const url = `${this.baseUrl}/upload`;
  return this.http.post<any>(url, data );
  }



  imgUpdate( data: any, id: string ){
    const url = `${ this.baseUrl }/upload/${ id }`

    return this.http.put<any>( url, data);
  }

  imgDelete( id: string ){
  const url = `${ this.baseUrl }/upload/${ id }`;

  return this.http.delete<any>( url );
    
  }





  
  routeNavigation(recipeMenu: string){
    switch (recipeMenu) {
      case "Panaderia":
        this.router.navigateByUrl('recipes/bakery');
        break;
      case "Pasteleria":
        this.router.navigateByUrl('recipes/pastry');
        break;
    
      default:
        this.router.navigateByUrl('recipes/chocolatier');
        break;
    }
  }



}
