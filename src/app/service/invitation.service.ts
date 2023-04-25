import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InvitationService {

  constructor() { }

  private ivPage = new BehaviorSubject<any>({});
  ivPage$ = this.ivPage.asObservable();

  getIvPage(message:string){
    this.ivPage.next(message)
  }

  private captionLabel = new BehaviorSubject<any>([]);
  captionLabel$ = this.captionLabel.asObservable();

  getcaptionLabel(message:any[]){
    this.captionLabel.next(message)
  }

  private InvitationTemplateCode = new BehaviorSubject<any>({});
  InvitationTemplateCode$ = this.InvitationTemplateCode.asObservable();

  getInvitationTemplateCode(message:string){
    this.InvitationTemplateCode.next(message)
  }

  private SelectedTemplate = new BehaviorSubject<any>({});
  SelectedTemplate$ = this.SelectedTemplate.asObservable();

  getSelectedTemplate(message:string){
    this.SelectedTemplate.next(message)
  }

}
