import {Component, OnInit} from '@angular/core';
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  numberOfAssemblies: number = 0;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getNumberOfAvailableAssemblies();
  }

  public getNumberOfAvailableAssemblies() {
    this.apiService.getNumberOfAvailableAssemblies().subscribe(res => {
      this.numberOfAssemblies = res;
    }, err => {
      alert("Возникла ошибка;")
    });
  }

}
