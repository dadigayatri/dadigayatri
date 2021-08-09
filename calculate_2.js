function Calculate()
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = " <br>If you deposit " + "<span class='highlight'>Rs." + principal + "</span>"  + ", at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "<br> You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + " in the year " + "<span class='highlight'>" + yearNow + ".</span>";
}
function Reset()
{
    document.getElementById("principal").value="";
    document.getElementById("rate").value="";
    document.getElementById("years").value ="";
    document.getElementById("result").innerHTML ="";
}
