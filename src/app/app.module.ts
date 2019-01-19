import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";
import { NgxPaginationModule } from 'ngx-pagination';
import {PartTextFilterPipe} from './shared/part-text-filter.pipe';
import {PartRequirementFilterPipe} from './shared/part-requirement-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PartTextFilterPipe,
    PartRequirementFilterPipe
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
