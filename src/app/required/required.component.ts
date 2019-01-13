import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Part} from "../parts/model/part";

@Component({
  selector: 'app-required',
  templateUrl: './required.component.html',
  styleUrls: ['./required.component.css']
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
