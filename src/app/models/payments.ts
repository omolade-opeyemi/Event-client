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

