import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

import { User } from 'app/main/authentication/_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    env = environment;
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${this.env.api}/users`);
    }

    getById(id: number) {
        return this.http.get<User>(`${this.env.api}/users/${id}`);
    }
}