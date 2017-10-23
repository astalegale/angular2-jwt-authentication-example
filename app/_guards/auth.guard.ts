import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Utils } from '../_shared/common-functions.utils';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {
        let auctionId = Utils.getVirtualDir();
        if (localStorage.getItem(auctionId)) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}