import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SepetService } from './sepet.service';

@Injectable()
export class BosSepetGuard implements CanActivate {
  constructor(
    public sepet: SepetService,
    public router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.sepet.urunler
      .map(value => !!value.size)
      .map(mayEnter => {
        if (!mayEnter) {
          this.router.navigate(["/"]);
        }
        return mayEnter;
      });
  }
}
