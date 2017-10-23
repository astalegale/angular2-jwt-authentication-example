import {
    HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Utils } from '../_shared/common-functions.utils';




@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let auctionId = Utils.getVirtualDir();

        let dataStored = localStorage.getItem(auctionId)
        let token: any = undefined;

        if (dataStored) {
            let storeAuth = JSON.parse(dataStored);
            token = JSON.parse(localStorage.getItem(auctionId)).token;
            if (token)
                req = req.clone({ headers: req.headers.set('Authorization', `bearer ${token}`) });
        }

        req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });

        return next.handle(req);
    }

}