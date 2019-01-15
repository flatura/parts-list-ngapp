import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Part} from "./model/part";

@Component({
  selector: 'app-required',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class RequiredComponent implements OnInit {
  private parts: Part[] = [];
  private title: string = "Обязательные комплектующие";

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.listRequiredParts();
  }

  public listRequiredParts() {
    this.apiService.getRequiredParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
  }
}
