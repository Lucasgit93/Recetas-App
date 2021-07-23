import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtValidationGuard implements CanActivate, CanLoad {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    return false;


  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {
      if(localStorage.getItem('token')){
        return true;
      }
      return false;
  }
}

