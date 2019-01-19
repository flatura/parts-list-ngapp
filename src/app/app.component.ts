import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Part} from "./parts/model/part";
import {ApiService} from "./shared/api.service";
import {until} from "selenium-webdriver";
import alertIsPresent = until.alertIsPresent;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
  @ViewChild('editTemplate') editTemplate: TemplateRef<any>;
  showingModeTitle = 'Все комплектующие';
  requirementFilter: string = "full";
  parts: Part[] = [];
  part: Part;
  isNewRecord: boolean;
  searchText: string;
  page: number = 1;
  numberOfAssemblies: number = 0;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getAllParts();
    this.showAllParts();
    this.getNumberOfAvailableAssemblies()
  }

  // Получить полный список комплектующих
  public getAllParts() {
    this.apiService.getAllParts().subscribe(res => {
      this.parts = res;
    }, err => {
      alert("Возникла ошибка;")
    });
  }

  // Определить шаблон для отображения комплектующего
  loadTemplate(part: Part) {
    if (this.part && this.part.id == part.id) {
      return this.editTemplate;
    } else {
      return this.readOnlyTemplate;
    }
  }

  // Создание нового комплектующего
  createPart() {
    this.part = new Part("0", "Новый компонент", false, "1");
    this.parts.push(this.part);
    this.isNewRecord = true;
  }

  // Редактирование комплектующего
  editPart(part: Part) {
    this.part = new Part(part.id, part.name, part.need, part.count);
  }

  // Сохранение измененного комплектующего
  savePart() {
    if (this.isNewRecord) {
      this.apiService.createPart(this.part).subscribe(
        res => {
          this.getAllParts();
        },
        err => {

        }
      )
      this.isNewRecord = false;
      this.part = null;
    }

    this.apiService.updatePart(this.part).subscribe(
      res => {
        location.reload();
        this.getAllParts()
      },
      err => {
        alert("Ошибка сохранения комплеткующего");
      }
    );
  }

  // Удаление комплектующего
  deletePart(part: Part) {
    this.apiService.deletePart(part.id).subscribe(
      res => {
        this.getAllParts();
      },
      err => {
        alert("Ошибка удаления комплектующего");
      }
    );
  }

  // Отмена редактирования
  cancel() {
    if (this.isNewRecord) {
      this.parts.pop();
      this.isNewRecord = false;
    }
    this.part = null;
  }

  public showRequiredParts() {
    this.requirementFilter = "required";
    this.showingModeTitle = "Обязательные комплектующие";
  }

  public showOptionalParts() {
    this.requirementFilter = "optional";
    this.showingModeTitle = "Опциональные комплектующие";
  }

  public showAllParts() {
    this.requirementFilter = "all";
    this.showingModeTitle = "Все комплектующие";
  }

  public getNumberOfAvailableAssemblies() {
    this.apiService.getNumberOfAvailableAssemblies().subscribe(res => {
      this.numberOfAssemblies = res;
    }, err => {
      alert("Возникла ошибка;")
    });
  }
}
