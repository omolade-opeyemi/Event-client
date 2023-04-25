export class CreateInvitation {
    constructor(
      public Caption: string,
      public Description: string,
      public ProfileId : number,
      public FormData : string,
      public InvitationTemplateCode : string,
      public  InvitationHTML: string
    ){}
  }

  export class AddSingleInvitee {
    constructor(
      public firstName: string,
      public lastName: string,
      public code : string,
      public imageUrl : string,
      public phoneNumber : string,
      public  email: string,
      // public  guests: number,
      // public  tableId: number,
      // public  invitationId: number,
      // public seatId: number

    ){}
  }


  export class Chairs {
    constructor(
      public id: number,
      public caption: string,
      public label: string
    ){}
  }
  export class Tables{
    constructor(
      public caption: string,
      public pattern: string,
      public chairQuatity: number,
      public invitationId: number,
      public label: string,
      public chairs: Chairs[]
    ){}
  }

  export class CreateTableArrangements {
    constructor(
      public tables: Tables[],
    ){}
  }

  export class AssignInviteeToTable {
    constructor(
      public invitationId: number,
      public profileId: number,
      public inviteeAssignments: InviteeAssignments[]
    ){}
  }

export class InviteeAssignments{
  constructor(
    public inviteeId: number,
    public tableId: number,
    public tableLabel: string,
    public inviteeGroupId: number,
    public chairLabel: string,
    public guests: number
  ){}
}

export class CreateInviteeGroup{
  constructor(
    public caption: string,
    public description: string,
    public invitationId: number,
    public profileId: number
  ){}
}

export class AssignInviteesToGroup{
  constructor(
    public inviteesId: number[],
    public groupId: number,
    public profileId: number,
    public invitationId: number
  ){}
}