import { CanActivate, 
     ActivatedRouteSnapshot,
     RouterStateSnapshot, 
     Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
    }
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       return this.authService.isAuthenticated().then(
            (isAuthenticated: boolean) => {
                if (isAuthenticated) {
                    console.log("can move");
                    return true;
                } else {
                    console.log("navigate to home");
                    this.router.navigate(['/']);
                }
            }
        )
    }
}