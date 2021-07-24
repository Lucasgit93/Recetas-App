import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtValidationGuard implements CanActivate, CanLoad {

  constructor( private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    this.router.navigateByUrl('/');
    return false;


  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean  {
      if(localStorage.getItem('token')){
        return true;
      }
      this.router.navigateByUrl('/');
      return false;
  }
}

