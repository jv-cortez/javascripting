var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

// TO CALCULATE THE TOTAL SALES

function calculateSalesTotal(salesData){
  var total = 0;
  for(var x = 0; x < salesData.length; x++){
    total += salesData[x];
  }
  return total;
}
function calculateTax(salesValue, province) {
return salesValue * salesTaxRates[province]
}

function calculateSalesTax(companySalesData, salesTaxRates){



  var totalSalesData = {

  };
  for (var i = 0; i < companySalesData.length; i++){

    var temp ={};
    temp.totalSales = calculateSalesTotal(companySalesData[i].sales);
    temp.totalTaxes = calculateTax(temp.totalSales,companySalesData[i].province)
    if(totalSalesData.hasOwnProperty(companySalesData[i].name)){
      totalSalesData[companySalesData[i].name].totalSales += temp.totalSales;
      totalSalesData[companySalesData[i].name].totalTaxes += temp.totalTaxes;

    }
    else{
       totalSalesData[companySalesData[i].name] = temp;
    }

  }
  return (totalSalesData);

}




var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
