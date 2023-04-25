import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/service/endpoints.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { FileStorageService } from 'src/app/service/filestorage.service';
import { PartnerProfile } from 'src/app/models/authentication';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  profileData = new PartnerProfile(0,'','','',0,'',0,'','','')
  response:any;

  constructor(
    private endpoint: EndpointsService,
    private notify: NotificationService,
    private spinner: NgxSpinnerService,
    private fileStorageService: FileStorageService,
  ) { }

  ngOnInit(): void {
    this.getUserProfile()
  }
  url = '/assets/images/Card.png';
  fileUrl: string = '';
  profileImage:any;


  onSelect(event:any) {
    if(event.target.files && event.target.files.length) {
      for(let i = 0; i < event.target.files.length; i++){
        const [file] = event.target.files;
      this.url = file;
     this.imageUpload(this.url)
    }

    }
  }

  imageUpload(selectedfile: any) {
    this.spinner.show();
    this.fileStorageService.UploadFileFromDataUrl(selectedfile);
    this.fileStorageService.onUploadFinished.subscribe(
      (resp: any) => {
        this.spinner.hide();
        if (resp.responseCode != "00") {
          this.notify.showError('System error, A system error has occured');
        }
        else {
          this.fileUrl = resp.responseData;
          this.profileData.profileImage = this.fileUrl;
        }
      }, (error) => {
        this.notify.showError(error.errorMsg);
        this.spinner.hide();

      }
    )
  }
  userData:any
  getUserProfile(){
    this.spinner.show();
    this.endpoint.getUserProfile(Number(localStorage.getItem('profileId'))).subscribe((data)=>{
    this.response = data;
    this.spinner.hide();
    if(this.response.responseCode == '00'){
      this.userData = this.response.responseData;
      this.profileData.name  = this.userData.name;
      this.profileData.email = this.userData.email;
      this.profileData.phoneNumber = this.userData.phoneNumber;
      this.profileData.street = this.userData.street;
      this.profileData.lgaName = this.userData.lgaName;
      this.profileData.stateName = this.userData.stateName;
      this.profileData.profileImage = this.userData.profileImage;
      this.profileData.lgaId = this.userData.lgaId;
      this.profileData.stateId = this.userData.stateId;
    }else{
      this.notify.showError(this.response.responseMsg)
    }
    },(error) => {
      this.notify.showError(error.message);
      this.spinner.hide();
    })
  }
  updateCustomerProfile(){
    this.profileData.profileId = Number(localStorage.getItem('profileId'))
    this.endpoint.updateCustomerProfile(this.profileData).subscribe((data)=>{
      this.response = data;
      if(this.response.responseCode == '00'){
        this.notify.showSuccess('Profile successfully updated')
      }else{
        this.notify.showError(this.response.responseMsg)
      }
    },(error) => {
      this.notify.showError(error.message);
      this.spinner.hide();
    })
  }
}
