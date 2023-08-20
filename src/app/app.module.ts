import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { AddAssessmentCardComponent } from './components/add-assessment-card/add-assessment-card.component';
import { AssessmentCardComponent } from './components/assessment-card/assessment-card.component';
import { PopupComponent } from './components/popup/popup.component';
import { GenericService } from './services/generic.service';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    DashboardComponent,
    HeaderComponent,
    OverviewComponent,
    AddAssessmentCardComponent,
    AssessmentCardComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GenericService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
