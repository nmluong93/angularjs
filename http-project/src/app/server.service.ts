import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/Rx';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class ServerService {

    constructor(private http: Http) {

    }

    storeService(services: any[]) {
        //    return  this.http.post('https://angular-demo-backend.firebaseio.com/data.json', services);
        return this.http.put('https://angular-demo-backend.firebaseio.com/data.json', services);
    }

    getServers() {
        return this.http.get('https://angular-demo-backend.firebaseio.com/data.json')
            .pipe(map(
                resopnse => resopnse.json()
            ),
            catchError(error => {
                console.log(error);
                return Observable.throwError(error);
            }))
    }

    getPipeString() {
        return this.http.get('https://angular-demo-backend.firebaseio.com/TestPipe.json').pipe(
            map(response => response.json())
        )
    }
}