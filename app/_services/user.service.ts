import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { AuthenticationService } from './index';
import { User } from '../_models/index';
import { Utils } from '../_shared/common-functions.utils';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(
        private http: HttpClient,
        private authenticationService: AuthenticationService) {
    }

    getUsers(): Observable<User[]> {
        // add authorization header with jwt token


        let auctionId = Utils.getVirtualDir();

        // get users from api
        return this.http.get<User[]>(`http://localhost/Spazioaste.Webapi/${auctionId}/Utenti/HelloAdmin`);
    }
}