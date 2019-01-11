import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AllComponent } from './all/all.component';
import { RequiredComponent } from './required/required.component';
import { OptionalComponent } from './optional/optional.component';
import {Router, RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { FeedbackComponent } from './feedback/feedback.component';

const appRoutes: Routes = [
  {
    path:'all',
    component:AllComponent
  },
  {
    path:'required',
    component:RequiredComponent
  },
  {
    path:'optional',
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
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}) //TODO убрать enableTracing на продакшене
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
