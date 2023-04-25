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
import { SpecialRequestComponent } from './components/special-request/special-request.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { AccountComponent } from './components/account/account.component';
import { InvitationComponent } from './components/invitation/invitation.component';

const routes: Routes = [
  {path: 'header',component:HeaderComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'events',component:EventsComponent},
  {path: 'event-detail', component:EventDetailComponent},
  {path: 'create-event', component:CreateEventComponent},
  {path: 'schedule', component:ScheduleComponent},
  {path: 'plan-budget', component:PlanBudgetComponent},
  {path: 'special-request', component:SpecialRequestComponent},
  {path: 'wallet', component:WalletComponent},
  {path: '', component:AuthenticationComponent},
  {path: 'pricing', component:PricingComponent},
  {path: 'invoice', component:InvoiceComponent},
  {path: 'ticket', component:TicketComponent},
  {path: 'account', component:AccountComponent},
  {path: 'invitation', component:InvitationComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
