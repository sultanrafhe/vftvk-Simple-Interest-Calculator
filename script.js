

function slidercall() {
  var slider = document.getElementById("myrate");
  var svalue = document.getElementById("slidervalue");
  svalue.innerHTML = slider.value;
}


function compute() {
  var principal = document.getElementById("principal").value;
  var interestRate = document.getElementById("myrate").value;
  var calcvalue = document.getElementById("result");
  var numOfYrs = document.getElementById("yrs").value;
  var finalresult = principal * interestRate * numOfYrs/100;
  var futureyear = Number(2021) + Number(numOfYrs);
  var pcalcvale = document.getElementById("result2");
  var ircalcvale = document.getElementById("result3");
  var recieveval = document.getElementById("result4");
  var finalyearval = document.getElementById("result5");
  var text1 = document.getElementById("resulta");
  var text2 = document.getElementById("resultb");
  var text3 = document.getElementById("resultc");
  


  calcvalue.innerHTML = "If you deposit " ;
  pcalcvale.innerHTML = principal;
  text1.innerHTML = "at an interest rate of "
  ircalcvale.innerHTML = interestRate+"%";
  text2.innerHTML = "You will recieve an amount of "
  recieveval.innerHTML = finalresult;
  text3.innerHTML = "in the year ";
  finalyearval.innerHTML = futureyear;


    
}
