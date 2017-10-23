import { Injectable } from '@angular/core';
import { Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/map'
import { Utils } from '../_shared/common-functions.utils';
import { HttpClient } from '@angular/common/http';
import { Token } from '../_models/token';

@Injectable()
export class AuthenticationService {
    // private token: string;

    constructor(private http: HttpClient) {
        // set token if saved in local storage
        // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // this.token = currentUser && currentUser.token;

        //CLEAR THE LOCALSTORAGE IF TOKEN IS EXPIRED
    }

    login(username: string, password: string): Observable<boolean> {
        let data = JSON.stringify({ username: username, password: password });

        let auctionId = Utils.getVirtualDir();
        return this.http.post(`http://localhost/Spazioaste.Webapi/${auctionId}/Utenti/Login`, data)
            .map((data: Token) => {
                debugger;
                // login successful if there's a jwt token in the response
                let token = data.token;

                if (token) {
                    // set token property
                    // this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem(auctionId, JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    localStorage.removeItemsetItem(auctionId);
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        // this.token = null;
        let auctionId = Utils.getVirtualDir();
        localStorage.removeItem(auctionId);
    }
    getAuthToken(): string {
        let auctionId = Utils.getVirtualDir();
        let storageDate = JSON.parse(localStorage.getItem(auctionId));
        return storageDate.token;
    }

}