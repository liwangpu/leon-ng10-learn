import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JsonServerService {
    private server: string = 'http://localhost:3000';

    public constructor(
        public httpClient: HttpClient
    ) { }

    public getPostById(id: any): Observable<{ [key: string]: any }> {
        return this.httpClient.get(`${this.server}/posts/${id}`);
    }
}
