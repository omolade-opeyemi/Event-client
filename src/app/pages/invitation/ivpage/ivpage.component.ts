import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InvitationService } from 'src/app/service/invitation.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-ivpage',
  templateUrl: './ivpage.component.html',
  styleUrls: ['./ivpage.component.scss'],
  
})
export class IvpageComponent implements OnInit {

  edit: boolean = false;
  drawer: boolean = true;
  drawer_min: boolean = false;
  public editorValue: string = '';
  unsafeHtml: any;
  template= '1';
  closeResult: string = "";
  preview:boolean=false;
  caption:string = '';
  description:string= '';

  mymodel  :any='<html><head><title></title></head><body><p><span style="color:#f1c40f">fef4f4</span></p></body></html>';

  constructor(
    private iv: InvitationService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal
  ) { }

  
  ngOnInit(): void {
    

  }

  
  open(content:any) {
		this.modalService.open(content, { centered: true });
	}
  
  seePreview(){
    this.preview = true
  }
  seeDesign(){
    this.preview = false

  }
  valueOne:any;
  valueTwo =  'Marriana';
  updateCKStyle(){
    this.valueTwo = this.valueOne
    this.valueTwo = "<html>"+this.valueTwo+ "</html>"     
  }

  onEditClick(e: any) {
    this.edit = !this.edit;
  }
  onDesignClick(e: any) {
    this.edit = false;
  }
  onDrawerClick() {
    this.drawer = !this.drawer
    this.drawer_min = !this.drawer_min
  }

  captionLabel(){
    var caption: any[] = [this.caption,this.description]
    this.iv.getcaptionLabel(caption);
    this.modalService.dismissAll()
  }
  Invitation(){
    this.iv.getIvPage('invitation')
  }
  ivList(){
    this.iv.getIvPage('ivList')
  }
  seating(){
    this.iv.getIvPage('seating')
  }
  checkIn(){
    this.iv.getIvPage('checkIn')
  }
  ivGroup(){
    this.iv.getIvPage('ivGroup')
  }
  images = ['/assets/images/temp6.png',
  '/assets/images/temp7.png',
'/assets/images/temp8.png',
'/assets/images/temp10.png',
'/assets/images/temp5.png',
'/assets/images/temp9.png',
'/assets/images/temp4.png',
'/assets/images/temp3.png',]

selectTemplate(data:any){
  this.template = data;  
  if(data == '2'){
    this.iv.getInvitationTemplateCode('Bd-78778')
    this.iv.getSelectedTemplate(this.template)
  }  
  }

  editor(){
  console.log('input');
  }

        

 valuechange(newValue:any) {
   console.log(newValue.target.value)
 }
 public onChange( editor:any ) {
  // this.mymodel = this.sanitizer.bypassSecurityTrustHtml(this.mymodel)
  // console.log( editor );
  // console.warn(this.mymodel);
  
  
}
  
}
