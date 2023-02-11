import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UiResultsComponent } from './ui-results/ui-results.component';
import { ResultRowComponent } from './ui-results/result-row/result-row.component';
import { ResultRowRuleComponent } from './ui-results/result-row-rule/result-row-rule.component';
import { ResultToolbarComponent } from './ui-results/result-toolbar/result-toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UiResultsComponent,
    ResultRowComponent,
    ResultRowRuleComponent,
    ResultToolbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'results',
        component: UiResultsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
