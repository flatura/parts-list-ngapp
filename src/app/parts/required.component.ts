import { Component, OnInit } from '@angular/core';
import {ApiService} from "../shared/api.service";
import {Part} from "./model/part";

@Component({
  selector: 'app-required',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class RequiredComponent implements OnInit {
  private _parts: Part[] = [];
  private _page: number = 1;
  private _title: string = "Обязательные комплектующие";

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.listRequiredParts();
  }

  public listRequiredParts() {
    this.apiService.getRequiredParts().subscribe(res => {
      this._parts = res;
    }, err => {
      alert("Возникла ошибка;")
    });
  }


  get parts(): Part[] {
    return this._parts;
  }

  get page(): number {
    return this._page;
  }

  get title(): string {
    return this._title;
  }

  public deletePart(id: string) {
    this.apiService.deletePart(id);
  }
}
