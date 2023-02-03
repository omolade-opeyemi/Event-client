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
        public amount: Number
    ){}
  }