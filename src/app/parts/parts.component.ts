import { Component, OnInit } from '@angular/core';
import {Part} from "./model/part";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  parts: Part[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.listAllParts();
  }

  public listAllParts() {
    this.apiService.getAllParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
  }

  public listRequiredParts() {
    this.apiService.getRequiredParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
  }

  public listOptionalParts() {
    this.apiService.getOptionalParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
  }
}
