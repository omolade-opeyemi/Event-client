export class EventCreation {
    constructor(
      public event: Events,
      public eventSupplierIds: number[],
      public eventUrls : EventUrls[],
      public eventLocationDTOs : EventLocationDtos[],
      public eventDateDTOs : EventDateDtos[],
      public eventTickets : EventTickets[]
    ){}
  }

  export class Events{
    constructor(
        public profileId : number,
        public name : string,
        public description : string,
        public type : string,
        public category : string,
        public code : string,
        public maxSubscribers: number,
        public minSubscribers : number,
        public isPublished : boolean,
        public datePublished : string
    ){}
  }
  export class EventUrls{
    constructor(
        public websiteBannerUrl : string,
        public mobileBannerUrl : string
    ){}
  }
  export class EventLocationDtos{
    constructor(
        public stateId : number,
        public lgaId : number,
        public state : string,
        public address : string
    ){}
  }
  export class EventDateDtos{
    constructor(
        public eventStartDate : string,
        public eventEndDate : string,
        public eventStartTime : string,
        public eventEndTime : string
    ){}
  }
  
  export class EventTickets{
    constructor(
      public isPaid : boolean,
      public ticketName : string,
      public price : Number,
      public availableQuantity : Number,
      public ticketDescription : string,
      public eventStartDate : string,
      public eventEndDate : string,
      public eventStartTime : string,
      public eventEndTime : string
    ){}
  }
  export class Budgeting{
    constructor(
      public eventId:number,
      public sendRequest: boolean,
      public budgetDetails: BudgetDetails[]
    ){}
  }

  export class BudgetDetails{
    constructor(
      public eventSupplierId:number,
      public serviceId:number,
      public budget: number,
      public totalActualRequested : number,
      public unitPrice: number,
      public totalPrice: number,
      public quantityRequested: number
    ){}
  }

  export class PlaceHolder{
    constructor(
      public serviceCategory:string,
      public serviceVendor:string,
      public serviceName: string,
      public quantity : string,
      public rate : string,
      public amount : any,
      public status: string,
      public vendorImg:string,
      public VendorId:string,
      public serviceId:string
    ){}
  }

