function btnCalculate(){
    var mealCost = parseFloat(document.getElementById("txtMealCost").value);
    var tipPercentage = parseFloat(document.getElementById("txtTipPercentage").value);
    var totalTip = mealCost* (1+tipPercentage/100);
    document.getElementById("lblTipTotal").innerHTML = "Tip: $" + parseFloat(totalTip).toFixed(2);
}
function btnClear(){
    document.getElementById("txtMealCost").value= "";
    document.getElementById("txtTipPercentage").value= "";
    document.getElementById("lblTipTotal").innerHTML = "TIP TOTAL";
}