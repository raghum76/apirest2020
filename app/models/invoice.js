class invoice{
    constructor(date,payment,tax, customer_rfc){
        this.id=null;
        this.date=date;
        this.payment=payment;
        this.tax=tax;
        this.customer_rfc=customer_rfc
    }
}

module.exports=invoice;