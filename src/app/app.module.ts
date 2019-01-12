import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AllComponent } from './all/all.component';
import { RequiredComponent } from './required/required.component';
import { OptionalComponent } from './optional/optional.component';
import { Router, RouterModule, Routes} from "@angular/router";
import { FormsModule} from "@angular/forms";
import { FeedbackComponent } from './feedback/feedback.component';
import { PartsComponent } from './parts/parts.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoutes: Routes = [
  {
    path:'list/all',
    component:AllComponent
  },
  {
    path:'list/required',
    component:RequiredComponent
  },
  {
    path:'list/optional',
    component:OptionalComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AllComponent,
    RequiredComponent,
    OptionalComponent,
    FeedbackComponent,
    PartsComponent
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
