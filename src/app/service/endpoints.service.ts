import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  baseUrl = 'https://dev-online-backend.azurewebsites.net/'


  constructor(private http: HttpClient) { }
  getStates(): Observable<any>{
    return this.http.get(this.baseUrl+ '/api/Utilities/GetStates')
  }
  getLga(id:number): Observable<any>{
    return this.http.get(this.baseUrl+ "api/Utilities/GetLocalGovtAreas?stateId=" + id)
  }
  getBusinessType(): Observable<any>{
    return this.http.get(this.baseUrl+ '/api/Utilities/GetBusinessTypes')
  }
  verifyCode(data:any): Observable<any>{
    return this.http.post(`${this.baseUrl}api/SMSAuth/VerifyCode`, data)
  }
  resendVerificationCode(email:string): Observable<any>{
    return this.http.post(`${this.baseUrl}api/EventAuth/ResendVerificationCode`, email)
  }
  creatorLogin(data:any): Observable<any>{
    return this.http.post(this.baseUrl+ 'api/EventAuth/CreatorLogin',data)
  }

  creatorRegistration(data:any): Observable<any>{
    return this.http.post(this.baseUrl+ 'api/EventAccount/CreateEventCreatorAccount',data)
  }

  getPricingDetails(): Observable<any>{
    return this.http.get(this.baseUrl+ '/api/EventCreatorRegistration/GetPricingDetails')
  }
  processMonthlyPaidPlan(data:any): Observable<any>{
    return this.http.post(this.baseUrl+ 'api/EventCreatorRegistration/ProcessMonthlyPaidPlan',data)
  }
  processYearlyPaidPlan(data:any): Observable<any>{
    return this.http.post(this.baseUrl+ 'api/EventCreatorRegistration/ProcessYearlyPaidPlan',data)
  }
  processFreePlan(data:any): Observable<any>{
    return this.http.post(this.baseUrl+ 'api/EventCreatorRegistration/ProcessFreePlan', data)
  }
  getVendorCategories(): Observable<any>{
    return this.http.get(this.baseUrl+ 'api/EventCreation/GetVendorCategories')
  }
  getVendorByCategory(data:any): Observable<any>{
    return this.http.get(this.baseUrl+ '/api/EventCreation/GetVendorsByCategory?category='+data)
  }
  getVendorServiceDetail(data:number):Observable<any>{
    return this.http.get(this.baseUrl+ 'api/EventCreation/GetVendorServiceDetail?supplierId='+data)
  }
  getCreatorDashboard(data:number): Observable<any>{
    return this.http.get(this.baseUrl+ 'api/Dashboard/GetCreatorDashboardDetails?profileId='+data)
  }
  publishNewEvent(data:any){
    return this.http.post(this.baseUrl+ 'api/EventCreation/PublishNewEvent',data)
  }
  draftNewEvent(data:any){
    return this.http.post(this.baseUrl+ 'api/EventCreation/DraftEvent',data)
  }
  getEventCategories(){
    return this.http.get(this.baseUrl+ '/api/EventCommon/GetEventCategories')
  }
  getEventTypes(id:number){
    return this.http.get(this.baseUrl+ 'api/EventCommon/GetEventTypes?categoryId='+id)
  }
  getActivePlan(id:number){
    return this.http.get(this.baseUrl+ 'api/EventCreatorRegistration/GetActivePlan?profileId='+id)
  }
  CreateEventBudget(data:any): Observable<any>{
    return this.http.post(this.baseUrl+ '/api/EventPlanning/CreateEventBudget',data)
  }
  getEventDetails(id:number): Observable<any>{
    return this.http.get(this.baseUrl+ '/api/EventCreation/GetEventDetail?eventId='+id)
  }
  getEventBudgetSummary(profile:number,event:number): Observable<any>{
    return this.http.get(this.baseUrl+ 'api/EventPlanning/GetEventBudgetSummary?profileId='+profile+'&eventId='+event)
  }

}
