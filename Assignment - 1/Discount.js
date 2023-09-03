
const amt = parseInt(prompt('Enter total purchase amount: '));

function CALCULATEDISCOUNT(amt) {
    if(amt <= 50) {
        disc = 0;
        discamt = 0.00*amt;
        totalamount = amt-discamt;
        return "Discounted amount is : " + discamt + " & Total amount + Discount amount is : " + totalamount;
    }
    else if(amt>=50 && amt<=99){
        disc = 0.05;
        discamt = 0.05*amt;
        totalamount = amt-discamt;
        return "Discounted amount is : " + discamt + " & Total amount + Discount amount is : " + totalamount;
    }
     else if(amt>=100 && amt<=199){
        disc = 0.1;
        discamt = 0.1*amt;
        totalamount = amt-discamt;
        return "Discounted amount is : " + discamt + " & Total amount + Discount amount is : " + totalamount;
    }
    else if(amt>=200){
        disc = 0.15;
        discamt = 0.15*amt;
        totalamount = amt-discamt;

        return "Discounted amount is : " + discamt + " & Total amount + Discount amount is : " + totalamount;
    }

}

console.log(CALCULATEDISCOUNT(amt));
