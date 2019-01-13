import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Part} from "../parts/model/part";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL = "http://localhost:8080/api";
  private ALL_PARTS_URL = `${this.BASE_URL}\\list\\all`;
  private REQUIRED_PARTS_URL = `${this.BASE_URL}\\list\\required`;
  private OPTIONAL_PARTS_URL = `${this.BASE_URL}\\list\\optional`;

  private CREATE_PART_URL = `${this.BASE_URL}\\part\\new`;
  private EDIT_PART_URL = `${this.BASE_URL}\\part\\save`;
  private GET_PART_URL = `${this.BASE_URL}\\part\\get\\`;
  private DELETE_PART_URL = `${this.BASE_URL}\\part\\delete\\`;

  private GET_NUMBER_OF_ASSEMBLIES_URL = `${this.BASE_URL}\\info\\assembliesavailable`;


  constructor(private http: HttpClient) {

  }

  getAllParts() : Observable<Part[]> {
    return this.http.get<Part[]>(this.ALL_PARTS_URL);
  }

  getRequiredParts() : Observable<Part[]> {
    return this.http.get<Part[]>(this.REQUIRED_PARTS_URL);;
  }

  getOptionalParts() : Observable<Part[]> {
    return this.http.get<Part[]>(this.OPTIONAL_PARTS_URL);
  }

  getNumberOfAvailableAssemblies(): Observable<number> {
    return this.http.get<number>(this.GET_NUMBER_OF_ASSEMBLIES_URL);
  }
}

