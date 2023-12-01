import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
  
export class ValidauserGuard implements CanActivate {
  iduser: any;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    console.log('Guard is running'); // Validar en consola el funcionamiento 
    this.iduser = sessionStorage.getItem('id');

    if (this.iduser == null) {
      this.router.navigate(['login']);
      return false;
    }

    // If the user has permissions or is authenticated, return true to allow access.
    return true;
  }
}