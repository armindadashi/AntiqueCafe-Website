function sum() {
    var firstNum = Number(document.getElementById("price1").value);
    var secondNum = Number(document.getElementById("price2").value);
    var result = firstNum + secondNum;
    document.getElementById("result").innerHTML = result;
}