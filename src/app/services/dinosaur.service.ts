import { Injectable } from '@angular/core';
import { Dinos } from '../Dinos';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class DinosaurService {
  private apiUrl: string = 'http://localhost:3000/dinosaurs';

  constructor(private http: HttpClient) {}

  getDinos(): Observable<Dinos[]> {
    return this.http.get<Dinos[]>(this.apiUrl);
  }

  getDinoById(id: number): Observable<Dinos> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Dinos>(url);
  }

  deleteDino(dino: Dinos): Observable<Dinos> {
    const url = `${this.apiUrl}/${dino.id}`;
    console.log('url', url);
    console.log('dino.id', dino.id);
    return this.http.delete<Dinos>(url);
  }

  addDino(dino: Dinos): Observable<Dinos> {
    return this.http.post<Dinos>(this.apiUrl, dino, httpOptions);
  }

  // editDino(id: number, dino: Dinos): Observable<Dinos> {
  // const url = `${this.apiUrl}/${dino.id}`;
  //   return this.http.put<Dinos>(url, httpOptions);
  // }
}
