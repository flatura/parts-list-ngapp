import { Component, OnInit } from '@angular/core';
import {Part} from "../parts/model/part";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
  private parts: Part[] = [];
  private page: number = 1;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.listAllParts();
  }

  public listAllParts() {
    this.apiService.getAllParts().subscribe(res => {this.parts = res;},err => {alert("Возникла ошибка;")});
  }
}
