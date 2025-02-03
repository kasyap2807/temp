function add(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    let solution = document.getElementById("solution");

    solution.innerHTML = num1+" + "+num2+" = "+(num1+num2);
}
