var numbe = document.getElementById("intp");

function numb(a)
{
    numbe.value += a;
}
function check()
{
    var result = [];
    var answer;
    if (document.getElementById("intp").value == "NaN")
    {
        alert("Enter a valid number");
    }
    else if(numbe.value.includes("+"))
    {
        result = numbe.value.split("+");
        answer = parseFloat(result[0]) + parseFloat(result[1]);
    }
    else if (numbe.value.includes("-"))
    {
        result = numbe.value.split("-");
        answer = parseFloat(result[0]) - parseFloat(result[1]);
    }
    else if (numbe.value.includes("*"))
    {
        result = numbe.value.split("*");
        answer = parseFloat(result[0]) * parseFloat(result[1]);
    } 
    else if (numbe.value.includes("/"))
    {
        result = numbe.value.split("/");
        answer = parseFloat(result[0]) / parseFloat(result[1]);
    }
    else
    {
        result = numbe.value.split("%");
        answer = parseFloat(result[0]) % parseFloat(result[1]);
    }
    return answer;
}
function equ()
{
    a = check();
    document.getElementById("intp").value = a;
}
function cl()
{
    numbe.value = "";
}
function del()
{
    numbe.value = numbe.value.slice(0,-1);
}
