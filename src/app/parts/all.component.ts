import { Component, OnInit } from '@angular/core';
import {Part} from "./model/part";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-all',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class AllComponent implements OnInit {
  private parts: Part[] = [];
  private page: number = 1;
  private title: string = "Все комплектующие";

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.listAllParts();
  }

  public listAllParts() {
    this.apiService.getAllParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
  }
}
