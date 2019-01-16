import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Router, RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MenuComponent} from './menu/menu.component';
import {AllComponent} from './parts/all.component';
import {RequiredComponent} from './parts/required.component';
import {OptionalComponent} from './parts/optional.component';
import { FormsModule} from "@angular/forms";
import { FeedbackComponent } from './feedback/feedback.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {SummaryComponent} from './summary/summary.component';
import {PartComponent} from './parts/part/part.component';

const appRoutes: Routes = [
  {path: 'list/all', component: AllComponent},
  {path: 'list/required', component: RequiredComponent},
  {path: 'list/optional', component: OptionalComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AllComponent,
    RequiredComponent,
    OptionalComponent,
    FeedbackComponent,
    SummaryComponent,
    MenuComponent,
    PartComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}) //TODO убрать enableTracing на продакшене
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
