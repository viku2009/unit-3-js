
function generateTable() {
    let n = Number(document.getElementById("num").value);
    let table = "";

    for (let i = 1; i <= 10; i++) {
        table = table + n + " x " + i + " = " + (n * i) + "<br>";
    }

    document.getElementById("tableContainer").innerHTML = table;
}
