import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsserviceService {
  private apiKey = '3a57637e65967661ab0fb8513ed69566';
  private apiUrl = 'https://api.themoviedb.org/3';
  constructor(private http:HttpClient) { }
  getmoviesdetails(id:any): Observable<any> {
    const url = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
  gettvsdetails(id:any): Observable<any> {
    const url = `${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`;
    return this.http.get(url);
  }
}
