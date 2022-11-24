import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventsComponent } from './components/events/events.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { PlanBudgetComponent } from './components/plan-budget/plan-budget.component';

const routes: Routes = [
  {path: 'header',component:HeaderComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: '',component:EventsComponent},
  {path: 'event-detail', component:EventDetailComponent},
  {path: 'create-event', component:CreateEventComponent},
  {path: 'schedule', component:ScheduleComponent},
  {path: 'plan-budget', component:PlanBudgetComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
