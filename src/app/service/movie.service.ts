import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '3a57637e65967661ab0fb8513ed69566';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getMoviecon(): Observable<any> {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  getMovieDetails(movieId: string): Observable<any> {
    const url = `${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  getTvcon(): Observable<any> {
    const url = `${this.apiUrl}/tv/popular?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  getTvDetails(movieId: string): Observable<any> {
    const url = `${this.apiUrl}/tv/${movieId}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  getSearchmovies(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/movie?api_key=${this.apiKey}&&query=${query} `;
    return this.http.get(url);
  }
  getSearchtvs(query: string): Observable<any> {
    const url = `${this.apiUrl}/search/tv?api_key=${this.apiKey}&&query=${query} `;
    return this.http.get(url);
  }
 
}
