import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Part} from "../parts/model/part";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private URL_BASE = "http://localhost:8080/api";
  private URL_ALL_PARTS = `${this.URL_BASE}/list/all`;
  private URL_REQUIRED_PARTS = `${this.URL_BASE}/list/required`;
  private URL_OPTIONAL_PARTS = `${this.URL_BASE}/list/optional`;
  private URL_CREATE_PART = `${this.URL_BASE}/part`;
  private URL_EDIT_PART = `${this.URL_BASE}/part/`;
  private URL_GET_PART = `${this.URL_BASE}/part/`;
  private URL_DELETE_PART = `${this.URL_BASE}/part/delete/`;
  private URL_GET_NUMBER_OF_ASSEMBLIES = `${this.URL_BASE}/info/assembliesavailable`;

  constructor(private http: HttpClient) {
  }

  // Логика вывода всех комплектующих
  getAllParts() : Observable<Part[]> {
    return this.http.get<Part[]>(this.URL_ALL_PARTS);
  }

  // Логика вывода обязательных комплектующих
  getRequiredParts() : Observable<Part[]> {
    return this.http.get<Part[]>(this.URL_REQUIRED_PARTS);
  }

  // Логика вывода опциональных комплектующих
  getOptionalParts() : Observable<Part[]> {
    return this.http.get<Part[]>(this.URL_OPTIONAL_PARTS);
  }

  // Логика вывода доступного числа сборок
  getNumberOfAvailableAssemblies(): Observable<number> {
    return this.http.get<number>(this.URL_GET_NUMBER_OF_ASSEMBLIES);
  }

  // Логика создания нового комплектующего
  createPart(part: Part): Observable<any> {
    return this.http.post(this.URL_CREATE_PART, part);
  }

  // Логика редактирования и сохранения существующего комплектующего
  updatePart(part: Part): Observable<any> {
    return this.http.put(this.URL_EDIT_PART + part.id, part);
  }

  // Логика удаления комплектующего
  deletePart(id: string): Observable<any> {
    return this.http.delete(this.URL_DELETE_PART + id);
  }
}

