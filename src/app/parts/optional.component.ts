import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Part} from "./model/part";

@Component({
  selector: 'app-optional',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class OptionalComponent implements OnInit {
  private parts: Part[] = [];
  private page: number = 1;
  private title: string = "Опциональные комплектующие";

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.listOptionalParts();
  }

  public listOptionalParts() {
    this.apiService.getOptionalParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
  }
}
