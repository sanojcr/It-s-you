import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../models/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private baseUrl = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getPublicRepos(username: string): Observable<Repository[]> {
    return this.http.get<Repository[]>(`${this.baseUrl}/${username}/repos`);
  }
  
}
