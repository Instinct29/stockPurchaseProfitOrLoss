var ip = document.querySelector("#initial-price");
var qs = document.querySelector("#quantity-stocks");
var cp = document.querySelector("#current-price");
var btn = document.querySelector("#tell-me-btn");
var output = document.querySelector("#output");
btn.addEventListener("click",stockHandler);
function stockHandler(){
    var ipt = Number(ip.value);
    var qty = Number(qs.value);
    var cps = Number(cp.value);
    var finalMessage = calculateProfitLoss(ipt,qty,cps); 
    output.innerText = finalMessage;
}
function calculateProfitLoss(initial,quantity,current){
    //profitCase
    if(initial<current){
        var profit = (current - initial)*quantity ; 
        var profitPercentage = (profit/current)*100;
        
        return `yaya you got a profit 😀🤑✨ from these stocks and the total profit is  ${profit} , and profit percentage is ${profitPercentage}%`
        
    }
    else{
        if(initial>current){
            var loss = ( initial - current)*quantity;
            var lossPercentage = (loss/current)*100;
            return `Hard luck you got a loss 😢😟 from these stocks and the total loss is  ${loss} , and profit percentage is ${lossPercentage}%`
            
        }
        else{
            return "NEUTRAL , NO PAIN NO GAIN AND NO GAIN NO PAIN! 🐻👻"
            

        }
    }

}






//Formulas
/*
Profit = (sellingPrice-costPrice)
ProfitPercentage = (profit/CostPrice)*100
loss = (costprice - sellingPrice)
lossPercentage = (Loss/CostPrice)*100
*/