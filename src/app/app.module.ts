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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { NgCircleProgressModule } from 'ng-circle-progress';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxDropzoneModule } from 'ngx-dropzone';
import { Angular4PaystackModule } from 'angular4-paystack';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { NgxDonutChartModule } from 'ngx-doughnut-chart';
import { NgChartsModule } from 'ng2-charts';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';










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
import { SpecialRequestComponent } from './components/special-request/special-request.component';
import { SpecialrequestpageComponent } from './pages/specialrequestpage/specialrequestpage.component';
import { IprComponent } from './pages/ipr/ipr.component';
import { DaterangeComponent } from './pages/daterange/daterange.component';
import { RarComponent } from './pages/rar/rar.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { WalletpageComponent } from './pages/wallet-components/walletpage/walletpage.component';
import { WpasscodeComponent } from './pages/wallet-components/wpasscode/wpasscode.component';
import { WarningComponent } from './pages/wallet-components/warning/warning.component';
import { InfoComponent } from './pages/wallet-components/info/info.component';
import { WalletlandingComponent } from './pages/wallet-components/walletlanding/walletlanding.component';
import { PasscodeComponent } from './pages/wallet-components/passcode/passcode.component';
import { TrpasscodeComponent } from './pages/wallet-components/trpasscode/trpasscode.component';
import { UpdatePinComponent } from './pages/wallet-components/update-pin/update-pin.component';
import { WalletDashboardComponent } from './pages/wallet-components/wallet-dashboard/wallet-dashboard.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationPageComponent } from './pages/authentication-page/authentication-page.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PricingPageComponent } from './pages/pricing-page/pricing-page.component';
import { InterceptorService } from './service/interceptor.service';
import { InteractionService } from './service/interaction.service';
import { SplitPipe } from './pipes/split.pipe';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoicePageComponent } from './pages/invoice-page/invoice-page.component';
import { TicketPageComponent } from './pages/ticket-page/ticket-page.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TestpageComponent } from './pages/testpage/testpage.component';

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
    SpecialRequestComponent,
    SpecialrequestpageComponent,
    IprComponent,
    DaterangeComponent,
    RarComponent,
    WalletComponent,
    WalletpageComponent,
    WpasscodeComponent,
    WarningComponent,
    InfoComponent,
    WalletlandingComponent,
    PasscodeComponent,
    TrpasscodeComponent,
    UpdatePinComponent,
    WalletDashboardComponent,
    AuthenticationComponent,
    AuthenticationPageComponent,
    PricingComponent,
    PricingPageComponent,
    SplitPipe,
    InvoiceComponent,
    InvoicePageComponent,
    TicketPageComponent,
    TicketComponent,
    TestpageComponent,
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
    NgChartsModule,
    ToastrModule.forRoot(), // ToastrModule \
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
    MatTabsModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    NgxDropzoneModule,
    Angular4PaystackModule.forRoot('pk_test_xxxxxxxxxxxxxxxxxxxxxxxx'),
    MatListModule,
    MatMenuModule,
    NgxDonutChartModule,
    NgbPaginationModule


  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:  InterceptorService,
    multi: true},InteractionService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
