export interface CommonResponse {
  responseCode: string;
  responseData: any;
  responseMsg: string;
}

export class EventInformation {
  constructor(
    public event: string,
    public startDate: string,
    public endDate: string,
    public startTime: string,
    public endTime: string,
    public state: string,
    public lga: string,
    public street: string,
  ){}
}

export class CreateSpecial {
  constructor(
    public profileId: number,
    public eventId: number,
    public specialServiceReqDetail: SpecialRequestDetail[]
  ){}
}

export class SpecialRequestDetail{
  constructor(
    public quantity: number,
    public serviceId: number
  ){}
}

export class DeleteService{
  constructor(
    public eventid: number,
    public budgetDetailsId: number[],
    public profileId: number
    
  ){}
}
