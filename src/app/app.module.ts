import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//////// Imported Module //////////
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatStepperIntl, MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { CreateeventpageComponent } from './pages/createeventpage/createeventpage.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { SchedularComponent } from './schedular/schedular/schedular.component';
import { DemoUtilsComponent } from './schedular/demo-utils/demo-utils.component';
import { PlanbudgetpageComponent } from './pages/planbudgetpage/planbudgetpage.component';
import { PlanBudgetComponent } from './components/plan-budget/plan-budget.component';
import { FoodvendorComponent } from './pages/foodvendor/foodvendor.component';
import { VendorComponent } from './pages/vendor/vendor.component';
import { FoodDetailComponent } from './pages/food-detail/food-detail.component';
import { CarouselComponent } from './pages/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    EventsComponent,
    EventDetailComponent,
    DashboardPageComponent,
    SidebarComponent,
    CreateEventComponent,
    CreateeventpageComponent,
    SchedulePageComponent,
    ScheduleComponent,
    SchedularComponent,
    DemoUtilsComponent,
    PlanbudgetpageComponent,
    PlanBudgetComponent,
    FoodvendorComponent,
    VendorComponent,
    FoodDetailComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatBadgeModule,
    MatSidenavModule,
    MatTableModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    MatTabsModule
  ],
  providers: [{provide: MatStepperIntl},],
  bootstrap: [AppComponent]
})
export class AppModule { }
