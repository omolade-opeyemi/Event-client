export class PaymentDetails {
    constructor(
        public amount: string,
        public transactionRef: string,
        public paymentGateway: string,
        public paymentStatus: string
    ){}
  }

  export class ServicePayment{
    constructor(
        public paymentGateway: Number,
        public paymentReference: string,
        public paymentGatewayResponseCode: string,
        public paymentGatewayResponseMessage: string,
        public transactionSource: string,
        public email: string,
        public serviceId: Number,
        public amount: any
    ){}
  }

  export class Activatewallet{
    constructor(
      public profileId: number,
      public securityQuestion: string,
      public securityAnswer: string,
      public walletPin: string,
    ){}
  }

  
  export class WalletLogin{
    constructor(
      public profileId: number,
      public pin: string
    ){}
  }

  export class LoadWallet{
    constructor(
      public profileId: number,
      public amount: number,
      public platform: string,
      public transactionSource: string
    ){}
  }

  export class CreatorPayment{
    constructor(
      public profileId: number,
      public eventId: number,
      public invoiceId: number,
      public amount: number
    ){}
  }
  export class CardPayment{
    constructor(
      public profileId: number,
      public eventId: number,
      public invoiceId: number,
      public contractId: number,
      public amount: number,
      public trxRef: string,
      public paymentGatewayResponseCode: string
    ){}
  }

  export class WalletPayment{
    constructor(
      public profileId: number,
      public contractId: number,
      public contractServices: number[],
      public caption: string,
      public invoiceValue: number,
      public eventId: number,
      public transactionSource: string,
      public value: number,
      public vat: number
    ){}
  }

  export class PaymentForTicket{
    constructor(
      public email: string,
      public firstName: string,
      public lastName: string,
      public phoneNumber: string,
      public gender: string,
      public ticketPayments: Ticket[],
      public eventId: number,
      public paymentGateway: string,
      public trnRef: string,
      public totalAmount: number
    ){}
  }

  export class Ticket{
    constructor(
      public ticketId: number,
      public ticketName: string,
      public unitPrice: number,
      public quantity: number,
      public totalPrice: number
    ){}
  }

  export class FreeTicket{
    constructor(
      public email: string,
      public firstName: string,
      public lastName: string,
      public gender: string,
      public phoneNumber: string,
      public ticketId: number,
      public ticketName: string,
      public quantity: number,
      public eventId: number,
    ){}
  }

