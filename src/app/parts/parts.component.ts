import { Component, OnInit } from '@angular/core';
import {Part} from "./model/part";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  private parts: Part[] = [];
  private title: string = "Все комплектующие";

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  public listAllParts() {
    this.apiService.getAllParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
    this.title = "Все комплектующие";
  }

  public listRequiredParts() {
    this.apiService.getRequiredParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
    this.title = "Обязательные комплектующие";
  }

  public listOptionalParts() {
    this.apiService.getOptionalParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
    this.title = "Опциональные комплектующие";
  }
}
