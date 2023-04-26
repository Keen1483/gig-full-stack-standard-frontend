import { Injectable } from '@angular/core';
import { DatabaseObjects } from '../models/custom-types';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsConfigService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAll<T extends DatabaseObjects>(url: string): Observable<T[]> {
    if (!this.isUrl(url)) {
      throw new Error(url + ': Wrong URL. The URL must start with /');
    }
    return this.http.get<T[]>(this.apiBaseUrl + url);
  }

  get<T extends DatabaseObjects>(url: string, param: string|number): Observable<T> {
    if (!this.isUrl(url)) {
      throw new Error(url + ': Wrong URL. The URL must start with /')
    }
    return this.http.get<T>(this.apiBaseUrl + url + `/${param}`);
  }

  post<T extends DatabaseObjects>(url: string, data: T): Observable<T> {
    if (!this.isUrl(url)) {
      throw new Error(url + ': Wrong URL. The URL must start with /')
    }
    return this.http.post<T>(this.apiBaseUrl + url, data);
  }

  put<T extends DatabaseObjects>(url: string, param: string|number, data: T): Observable<T> {
    if (!this.isUrl(url)) {
      throw new Error(url + ': Wrong URL. The URL must start with /')
    }
    return this.http.put<T>(this.apiBaseUrl + url + `/${param}`, data);
  }

  delete<T extends DatabaseObjects>(url: string, param: string|number) {
    if (!this.isUrl(url)) {
      throw new Error(url + ': Wrong URL. The URL must start with /')
    }
    return this.http.delete<any>(this.apiBaseUrl + url + `/${param}`);
  }

  isUrl(url: string): boolean {
    return /^\/[a-zA-Z0-9._/-]*$/.test(url);
  }
}
