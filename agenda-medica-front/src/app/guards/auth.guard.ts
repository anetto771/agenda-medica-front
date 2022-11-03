import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  private router: Router;
  private service: AuthService

  constructor(router: Router, service: AuthService){
    this.router = router;
    this.service = service;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if(this.service.isAuthenticated()){
      return true;
    }
    else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
  
}
