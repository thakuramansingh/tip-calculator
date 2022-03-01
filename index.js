function tipCalc()
{
    let amount=parseFloat(document.getElementById("amount").value) ;
    let service=document.getElementById("service").value;
    let nop=document.getElementById("nop").value;

    let tipamount = (amount * service)/100;
    let perpersonamount = tipamount/nop;
    

    document.getElementById("tipamount").innerText=tipamount.toFixed(2);
    document.getElementById("peramt").innerText = perpersonamount.toFixed(2);
}
function changeMode(n)
{
    if(n==1)
    {
        document.getElementById("changemode").setAttribute("style","background:black;");
        document.getElementsByClassName("mode")[0].setAttribute("style","color:white");
    }else{
        document.getElementById("changemode").setAttribute("style","background:#F0FFF0;");
        document.getElementsByClassName("mode")[0].setAttribute("style","color:black");

    }
}